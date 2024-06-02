import { Request, Response } from "express";
import { UpdateBrokerService } from "../services/UpdateBrokerService";



export class UpdateBrokerController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const broker = req.body

        const service = new UpdateBrokerService();
        const result = await service.execute(parseInt(id), broker);

        if (result instanceof Error) {
            res.status(400).json(result.message)
        }
        return res.status(201).json(result)
    }
}