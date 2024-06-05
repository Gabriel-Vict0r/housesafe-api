import { Request, Response } from "express";
import { DisableBrokerService } from "../services/DisableBrokerService";


export class DisableBrokerController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const service = new DisableBrokerService();
        const result = await service.execute(parseInt(id));

        if (result instanceof Error) {
            return res.status(500).json(result.message)
        }
        return res.json(result);
    }
}