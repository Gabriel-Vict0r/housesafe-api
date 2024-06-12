import { PrismaClient } from "../prisma/generated/client";



export class GetBrokerService {
    async execute() {
        const prisma = new PrismaClient();

        const result = await prisma.broker.findMany();
        if (!result) {
            throw new Error('não há corretores cadastrados.')
        }
        return result;
    }
}