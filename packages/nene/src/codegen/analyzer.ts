import { Project, SourceFile, ClassDeclaration, MethodDeclaration, ParameterDeclaration, Decorator } from "ts-morph";

// ---------- Public types ----------

export interface ControllerInfo {
  name: string;           // e.g. "WaitlistController"
  path: string;           // e.g. "waitlist"
  methods: MethodInfo[];
}

export interface MethodInfo {
  name: string;           // e.g. "create"
  httpMethod: string;     // e.g. "POST"
  path: string;           // e.g. "" or "count" or ":id"
  returnType: string;     // e.g. "Promise<User>" or "unknown"
  parameters: ParameterInfo[];
}

export interface ParameterInfo {
  name: string;           // e.g. "dto"
  type: "body" | "param" | "query" | "headers";
  key?: string;           // e.g. "id" from @Param('id')
  tsType: string;         // e.g. "CreateWaitlistDto" or "string"
}

// ---------- HTTP method decorator names ----------

const HTTP_METHOD_DECORATORS: Record<string, string> = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

// ---------- Parameter decorator names ----------

const PARAM_DECORATORS: Record<string, ParameterInfo["type"]> = {
  Body: "body",
  Param: "param",
  Query: "query",
  Headers: "headers",
};

// ---------- Shared project instance ----------

let sharedProject: Project | null = null;

function getProject(): Project {
  if (!sharedProject) {
    sharedProject = new Project({
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        target: 99, // ESNext
        module: 99, // ESNext
        strict: false,
        skipLibCheck: true,
      },
      skipAddingFilesFromTsConfig: true,
      skipFileDependencyResolution: true,
    });
  }
  return sharedProject;
}

// ---------- Main entry ----------

/**
 * Analyze a NestJS controller file and extract metadata.
 * Returns null if the file does not contain a valid controller class.
 */
export function analyzeController(filePath: string): ControllerInfo | null {
  const project = getProject();

  // Remove previously added source file if it exists (for re-analysis)
  const existing = project.getSourceFile(filePath);
  if (existing) {
    project.removeSourceFile(existing);
  }

  const sourceFile = project.addSourceFileAtPath(filePath);
  const classes = sourceFile.getClasses();

  for (const cls of classes) {
    const controllerDecorator = cls.getDecorator("Controller");
    if (!controllerDecorator) continue;

    const controllerPath = extractDecoratorStringArg(controllerDecorator) ?? "";
    const name = cls.getName() ?? "UnnamedController";

    const methods: MethodInfo[] = [];

    for (const method of cls.getMethods()) {
      const methodInfo = analyzeMethod(method);
      if (methodInfo) {
        methods.push(methodInfo);
      }
    }

    return { name, path: controllerPath, methods };
  }

  return null;
}

// ---------- Method analysis ----------

function analyzeMethod(method: MethodDeclaration): MethodInfo | null {
  // Find which HTTP method decorator is applied
  let httpMethod: string | null = null;
  let routePath = "";

  for (const [decoratorName, httpVerb] of Object.entries(HTTP_METHOD_DECORATORS)) {
    const decorator = method.getDecorator(decoratorName);
    if (decorator) {
      httpMethod = httpVerb;
      routePath = extractDecoratorStringArg(decorator) ?? "";
      break;
    }
  }

  if (!httpMethod) return null;

  // Extract return type
  const returnType = getReturnType(method);

  // Extract parameters
  const parameters: ParameterInfo[] = [];
  for (const param of method.getParameters()) {
    const paramInfo = analyzeParameter(param);
    if (paramInfo) {
      parameters.push(paramInfo);
    }
  }

  return {
    name: method.getName(),
    httpMethod,
    path: routePath,
    returnType,
    parameters,
  };
}

// ---------- Parameter analysis ----------

function analyzeParameter(param: ParameterDeclaration): ParameterInfo | null {
  for (const [decoratorName, paramType] of Object.entries(PARAM_DECORATORS)) {
    const decorator = param.getDecorator(decoratorName);
    if (!decorator) continue;

    const key = extractDecoratorStringArg(decorator);
    const tsType = getParameterType(param);

    return {
      name: param.getName(),
      type: paramType,
      key: key ?? undefined,
      tsType,
    };
  }

  return null;
}

// ---------- Type helpers ----------

function getReturnType(method: MethodDeclaration): string {
  try {
    const returnTypeNode = method.getReturnTypeNode();
    if (returnTypeNode) {
      return returnTypeNode.getText();
    }

    // Try to infer the return type
    const type = method.getReturnType();
    const text = type.getText(method);

    // Clean up verbose type text
    if (text.length > 100) return "unknown";
    return text || "unknown";
  } catch {
    return "unknown";
  }
}

function getParameterType(param: ParameterDeclaration): string {
  try {
    const typeNode = param.getTypeNode();
    if (typeNode) {
      return typeNode.getText();
    }

    const type = param.getType();
    const text = type.getText(param);

    if (text.length > 100) return "unknown";
    return text || "unknown";
  } catch {
    return "unknown";
  }
}

// ---------- Decorator argument extraction ----------

/**
 * Extract the first string argument from a decorator call.
 * e.g. @Controller('waitlist') → 'waitlist'
 * e.g. @Get() → null
 * e.g. @Param('id') → 'id'
 */
function extractDecoratorStringArg(decorator: Decorator): string | null {
  const args = decorator.getArguments();
  if (args.length === 0) return null;

  const firstArg = args[0];
  const text = firstArg.getText();

  // Remove surrounding quotes (single or double)
  const match = text.match(/^['"](.*)['"]$/);
  if (match) {
    return match[1];
  }

  return null;
}
