import { Request, Response } from "express";
import { UpdateImmobileService } from "../services/UpdateImmobileService";



export class UpdateImmobileController {
    async handle(req: Request, res: Response) {
        let { id } = req.params;
        const { immobile } = req.body;
        const { address } = req.body;
        const service = new UpdateImmobileService();
        const result = await service.execute(parseInt(id), immobile, address);
        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.status(201).json(result);
    }
}