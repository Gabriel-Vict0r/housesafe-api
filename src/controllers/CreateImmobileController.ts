import { NextFunction, Request, Response } from "express";
import { CreateImmobileService } from "../services/CreateImmobileService";
import { IAddress, IImmobile } from "../interfaces/interfaces";
//import { Address, Immobile } from "@prisma/client";


export class CreateImmobileController {
    async handle(req: Request, res: Response, next: NextFunction) {
        let { address } = req.body
        let { immobile } = req.body
        immobile.id_broker = Number(immobile.id_broker)
        immobile.id_category = immobile.id_category as number;
        immobile.id_type = immobile.id_type as number;
        console.log(immobile)

        address = JSON.parse(address)
        immobile = JSON.parse(immobile)
        console.log('convertido', immobile)
        const service = new CreateImmobileService();

        const result = await service.execute(address, immobile);
        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        req.resultId = result.id;
        return next();
    }
}