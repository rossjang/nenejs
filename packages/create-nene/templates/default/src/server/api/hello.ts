import { Controller, Get } from "nene/decorators";

@Controller("/api")
export class HelloController {
  @Get("/hello")
  hello() {
    return { message: "Hello from nene.js!" };
  }

  @Get("/health")
  health() {
    return { status: "ok", timestamp: new Date().toISOString() };
  }
}
