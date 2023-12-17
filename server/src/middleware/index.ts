import { NextFunction, Request, Response } from "express";


export const sampleMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
    console.log('request path: ', req.path)
    const p1 = await Promise.resolve('sampleMiddleWare executed');
    console.log(p1)
    next();
}