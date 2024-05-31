import { Broker, PrismaClient } from "@prisma/client";



export class CreateBrokerService {
    async execute(broker: Broker) {

        const prisma = new PrismaClient();
        try {
            return await prisma.broker.create({ data: broker })
        } catch (error) {
            throw new Error(error as string);
        }
    }
}