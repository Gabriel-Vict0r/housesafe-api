import { PrismaClient } from "@prisma/client";



export class GetImmobileService {
    async execute(id: number) {
        const prisma = new PrismaClient();

        try {
            let immobile = await prisma.immobile.findFirst({
                where: {
                    id: id
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