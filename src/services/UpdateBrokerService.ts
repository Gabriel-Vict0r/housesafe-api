import { Broker, PrismaClient } from "@prisma/client";



export class UpdateBrokerService {
    async execute(id: number, broker: Broker) {
        const prisma = new PrismaClient();
        try {
            const updatedBroker = await prisma.broker.update({
                where: {
                    id: id
                },
                data: broker
            })
            return updatedBroker;
        } catch (error) {
            throw new Error(`Erro ao gravar dados: ${error}`);
        }
    }
}