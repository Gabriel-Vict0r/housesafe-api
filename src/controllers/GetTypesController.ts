import { Request, Response } from "express";
import { GetTypesService } from "../services/GetTypesService";




export class GetTypesController {
    async handle(req: Request, res: Response) {
        const service = new GetTypesService();
        const result = await service.execute();

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.json(result);
    }
}