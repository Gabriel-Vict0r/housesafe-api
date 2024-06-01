import { NextFunction, Request, Response } from "express";
import { CreateImmobileService } from "../services/CreateImmobileService";
import { IAddress, IImmobile } from "../interfaces/interfaces";
//import { Address, Immobile } from "@prisma/client";


export class CreateImmobileController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const { address } = req.body
        const { immobile } = req.body

        //console.log('endereço da requisição', address)
        const service = new CreateImmobileService();

        const result = await service.execute(address, immobile);
        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return next();
    }
}