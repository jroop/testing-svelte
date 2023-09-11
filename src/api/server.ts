import cors from "cors";
import express, { Request, Response } from "express";

/* relative js imports needed for version of node bundler  */
import { helloShared } from "../shared/shared.js";

/* export so can use in vite plugin */
export const app = express();

app.use(cors());

let calls = 0;

app.use("/api", (req: Request, res: Response) => {
  res.json({ msg: helloShared("express"), calls: (calls += 1) });
});
