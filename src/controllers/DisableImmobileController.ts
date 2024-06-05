import { Request, Response } from "express";
import { DisableImmobileService } from "../services/DisableImmobileService";



export class DisableImmobileController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DisableImmobileService();

        const result = await service.execute(parseInt(id));

        if (result instanceof Error) {
            return res.status(500).json(result.message);
        }
        return res.status(200).json(result);
    }
}