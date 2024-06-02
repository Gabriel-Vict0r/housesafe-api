import { Request, Response } from "express";
import { GetRecentsImmobileService } from "../services/GetRecentsImmobileService";


export class GetRecentsImmobileController {
    async handle(req: Request, res: Response) {
        const service = new GetRecentsImmobileService();
        const result = await service.execute();

        if (result instanceof Error) {
            return res.status(500).json(result.message)
        }
        return res.status(200).json(result);
    }
}