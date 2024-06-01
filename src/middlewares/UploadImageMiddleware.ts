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

export const uploadImagesMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    //const { file } = req;
    const filesReq = req.files!;
    const files = filesReq as Express.Multer.File[]
    //console.log(req.files);
    //var number = 0;
    const lengthArr = files.length as number;
    const uploadImageService = new UploadImageService();
    try {
        for (let index = 0; index < lengthArr; index++) {
            let file = files[index];
            await uploadImageService.execute(file);
        }
        return next();
    } catch (error: any) {
        return res.status(400).json({ message: error.message }).send('erro ao fazer upload das imagens')
    }
}