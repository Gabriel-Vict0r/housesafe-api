import { Request, Response } from "express";
import { CreateImmobileService } from "../services/CreateImmobileService";
import { IAddress, IImmobile } from "../interfaces/interfaces";
//import { Address, Immobile } from "@prisma/client";


export class CreateImmobileController {
    async handle(req: Request, res: Response) {
        const address = req.body
        const immobile = req.body
        const service = new CreateImmobileService();

        const result = service.execute(address, immobile);
        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result)
    }
}