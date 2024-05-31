import { Request, Response } from "express";
import { CreateBrokerService } from "../services/CreateBrokerService";




export class CreateBrokerController {
    async handle(req: Request, res: Response) {
        const broker = req.body
        const service = new CreateBrokerService();
        const result = await service.execute(broker);
        if (result instanceof Error) {
            return res.status(400).json(result)
        }
        return res.status(200).json(result);
    }
}