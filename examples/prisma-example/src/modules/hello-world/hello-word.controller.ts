import { Request, Response } from "express";

export function getHelloWorld(_req: Request, res: Response) {
  res.json({
    message: "hello world",
  });
}
