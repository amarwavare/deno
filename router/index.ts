import { Router, Request, Response, NextFunction } from "npm:express";

const ExpressRouter = Router();

ExpressRouter.get(
  "/",
  (_req: Request, res: Response, next: NextFunction): void => {
      console.log("Request headers - ", _req.headers);
    res.status(200).send("Hello from Deno & Express Application");
    next();
  },
);

export default ExpressRouter;
