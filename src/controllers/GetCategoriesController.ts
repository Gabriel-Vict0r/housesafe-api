import { Request, Response } from "express";
import { GetCategoriesService } from "../services/GetCategoriesService";




export class GetCategoriesController {
    async handle(req: Request, res: Response) {
        const service = new GetCategoriesService();
        const result = await service.execute();

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.json(result);
    }
}