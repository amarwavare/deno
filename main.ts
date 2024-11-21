import express from "npm:express";
import ExpressRouter from "./router/index.ts";

const app = express();
const port: number = Number(Deno.env.get("PORT")) || 3000;

app.use("/", ExpressRouter);

app.listen(port, (): void => {
  console.log(`Server started on port ${port}`);
});
