import { Request, Response } from "express";
import { CreateImageService } from "../services/CreateImageService";
import { Images } from "@prisma/client";


type IArrayOfImages = Images[]
export class CreateImageController {
    async handle(req: Request, res: Response) {
        const filesReq = req.files!;
        const files = filesReq as Express.Multer.File[];
        const id = req.resultId;
        let arrayOfImages: IArrayOfImages = [];

        for (let index = 0; index < files.length; index++) {
            const atualFile = files[index];
            let urlImage = `https://housesafebucket.s3.amazonaws.com/${atualFile.filename}`

            const service = new CreateImageService();
            const objImage = {
                id_immobile: id!,
                url: urlImage
            }
            const result = await service.execute(objImage);
            if (result instanceof Error) {
                return res.status(400).json({ message: result.message })
            }
            arrayOfImages.push(result);
        }
        return res.status(200).json(arrayOfImages.map((element) => element));
    }
}