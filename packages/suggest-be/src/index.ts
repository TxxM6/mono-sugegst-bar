import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();
const customLogger = (message: string, ...rest: string[]) => {
  console.log(message, ...rest);
};

app.use(
  "/*",
  cors({
    // origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // 本番と開発環境のURL
    origin: "*",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  })
);
app.use(logger(customLogger));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.post("/autoComplete/", async (c) => {
  const { keyword } = await c.req.json();
  customLogger(keyword);
  return c.json({ list: [`${keyword} 候補1`, `${keyword} 候補2`] });
});

const port = 3000;

serve({
  fetch: app.fetch,
  port,
});
