import { Request, Response } from "express";
import { GetBrokerService } from "../services/GetBrokersService";




export class GetBrokerController {
    async handle(req: Request, res: Response) {
        const service = new GetBrokerService();
        const result = await service.execute();

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.json(result);
    }
}