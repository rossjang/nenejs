# nene

The AI-native full-stack framework for building modern web applications.

[![npm version](https://badge.fury.io/js/nene.svg)](https://www.npmjs.com/package/nene)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install nene
# or
pnpm add nene
# or
yarn add nene
```

## Quick Start

```bash
# Create a new project
npm create nene@latest my-app
cd my-app
npm run dev
```

## Features

- **NestJS-Style Decorators** - `@Controller`, `@Get`, `@Post`, `@Body`, `@Param`, and more
- **Dependency Injection** - Built-in DI container with `@Injectable`
- **Auto-Generated Hooks** - Controllers automatically generate type-safe React hooks
- **Unified Context** - Share context between frontend and backend seamlessly
- **CLI Tools** - `nene dev`, `nene build`, `nene start`

## Usage

### Controllers

```typescript
import { Controller, Get, Post, Body, Param } from "nene/decorators";

@Controller("/api/users")
export class UserController {
  @Get("/")
  async getUsers() {
    return { users: [] };
  }

  @Get("/:id")
  async getUser(@Param("id") id: string) {
    return { id, name: "John" };
  }

  @Post("/")
  async createUser(@Body() data: { name: string; email: string }) {
    return { id: "1", ...data };
  }
}
```

### Services with Dependency Injection

```typescript
import { Injectable } from "nene/decorators";

@Injectable()
export class UserService {
  async findById(id: string) {
    // Business logic here
  }
}
```

### React Integration

```tsx
import { NeneProvider, useNeneContext } from "nene/react";

// Wrap your app with NeneProvider
function App() {
  return (
    <NeneProvider>
      <YourApp />
    </NeneProvider>
  );
}

// Access context anywhere
function UserProfile() {
  const { user, isLoading } = useNeneContext();

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>Please sign in</div>;

  return <div>Welcome, {user.name}!</div>;
}
```

### Auto-Generated Hooks

When you create a controller, nene.js automatically generates type-safe React hooks:

```tsx
// Auto-generated from UserController
import { useGetUsers, useCreateUser } from "@/hooks";

function UsersPage() {
  const { data, isLoading } = useGetUsers();
  const { mutate: createUser } = useCreateUser();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button
        onClick={() =>
          createUser({ name: "New User", email: "new@example.com" })
        }
      >
        Add User
      </button>
    </div>
  );
}
```

## CLI Commands

```bash
# Start development server with hot reload
nene dev

# Build for production
nene build

# Start production server
nene start
```

## API Reference

### Decorators

| Decorator           | Description                         |
| ------------------- | ----------------------------------- |
| `@Controller(path)` | Define a controller with base path  |
| `@Get(path)`        | Handle GET requests                 |
| `@Post(path)`       | Handle POST requests                |
| `@Put(path)`        | Handle PUT requests                 |
| `@Patch(path)`      | Handle PATCH requests               |
| `@Delete(path)`     | Handle DELETE requests              |
| `@Body()`           | Extract request body                |
| `@Param(key)`       | Extract URL parameters              |
| `@Query(key)`       | Extract query string parameters     |
| `@Headers(key)`     | Extract request headers             |
| `@Injectable()`     | Mark class for dependency injection |

### React Hooks

| Hook               | Description                         |
| ------------------ | ----------------------------------- |
| `useNeneContext()` | Access user, session, locale, theme |
| `useQuery()`       | Data fetching with caching          |
| `useMutation()`    | Data mutations                      |

## Documentation

Visit the [nene.js documentation](https://github.com/rossjang/nenejs) for more information.

## License

MIT License - see [LICENSE](../../LICENSE) for details.
