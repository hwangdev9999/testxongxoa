import { Elysia } from "elysia";

const app = new Elysia()

// CI CD worked
app.get("/check", async ctx => {
  return "Deploy test nha 111"
})

app.listen({
  port: 9043,
  reusePort: false
}, () => console.log("Service is running on port 9043"))