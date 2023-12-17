import { sampleMiddleWare } from "@middleware/index";
import { logger } from "@utils/index";
import { Request, Response } from "express";
import { AsyncRouter } from "express-async-router";
const router = AsyncRouter();

router.get("/", sampleMiddleWare , async (req: Request, res: Response) => {
  const p1 = await Promise.resolve({data: 'Hello World!'});
  return res.send(p1.data);
});

// define the home page route
router.get("/search/:name", (req: Request, res: Response) => {
  return res.send(req.params.name);
});
// define the about route
router.get("/about", (req, res) => {
    logger()
  return res.send("About");
});

router.get("/forms/v1/submit", (req: Request, res: Response) => {
  return res.send(req.params.name);
});

export default router;
