import { Request } from "express";
import { PrismaClient } from "../prisma/generated/client";



export class DisableBrokerService {
    async execute(id: number) {
        const prisma = new PrismaClient();

        const verify = await prisma.broker.findUnique({ where: { id: id } })
        if (!verify) {
            throw new Error('Corretor não existe na base de dados.');
        }
        const brokerDisabled = await prisma.broker.update({
            where: {
                id: id
            },
            data: {
                status: 'X'
            }
        })
        return brokerDisabled;
    }
}