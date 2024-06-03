import { Request, Response } from "express";
import { GetImmobileService } from "../services/GetImmobileService";


export class GetImmobileController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const service = new GetImmobileService();
        const result = await service.execute(parseInt(id));
        if (result instanceof Error) {
            return res.status(500).json(result);
        }
        return res.status(200).json(result);
    }
}