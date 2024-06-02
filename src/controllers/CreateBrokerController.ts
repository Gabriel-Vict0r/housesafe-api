import { Request, Response } from "express";
import { CreateBrokerService } from "../services/CreateBrokerService";




export class CreateBrokerController {
    async handle(req: Request, res: Response) {
        const broker = req.body
        const file = req.file
        const urlImage = `https://housesafebucket.s3.amazonaws.com/${file?.filename}`
        console.log(urlImage)
        const service = new CreateBrokerService();
        const objBroker = {
            broker: broker,
            url: urlImage
        }
        console.log(objBroker)
        const result = await service.execute(objBroker);
        if (result instanceof Error) {
            return res.status(200).json(result)
        }
        return res.status(201).json(result);
    }
}