import { NextFunction, Request, Response } from "express";
import { UploadImageService } from "../services/UploadImageService";



export const uploadImageMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;

    const uploadImageService = new UploadImageService();

    try {
        await uploadImageService.execute(file!);
        return next();
    } catch (error) {
        const erro = error as Error
        return res.status(200).json({ message: erro.message })
    }
}