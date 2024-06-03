import { Request, Response } from "express";
import { CreateAdminService } from "../services/CreateAdminService";



export class CreateAdminController {
    async handle(req: Request, res: Response) {
        const admin = req.body

        const service = new CreateAdminService();
        const result = await service.execute(admin);

        if (result instanceof Error) {
            res.status(400).json(result.message)
        }
        return res.status(201).json(result);
    }
}