import { Elysia } from "elysia";

const app = new Elysia()

app.get("/check", async ctx => {
  return "Hello world"
})

app.listen({
  port: 9043,
  reusePort: false
}, () => console.log("Service is running on port 9043"))