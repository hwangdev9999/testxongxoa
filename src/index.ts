import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia V1").listen(9043);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
