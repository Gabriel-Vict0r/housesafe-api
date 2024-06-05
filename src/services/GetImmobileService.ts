import { PrismaClient } from "../prisma/generated/client";


export class GetImmobileService {
    async execute(id: number) {
        const prisma = new PrismaClient();

        try {
            let immobile = await prisma.immobile.findUnique({
                where: {
                    id: id,
                    NOT: {
                        status: 'X'
                    }
                },
                include: {
                    address: true,
                    category: true,
                    type: true,
                    broker: true
                }
            })
            console.log(immobile)
            return immobile;
        } catch (error) {
            throw new Error(`erro ao selecionar dados: ${error}`);
        }
    }
}