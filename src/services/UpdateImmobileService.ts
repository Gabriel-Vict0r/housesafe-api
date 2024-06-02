import { Address, Immobile, PrismaClient } from "@prisma/client";



export class UpdateImmobileService {
    async execute(id: number, immobile: Immobile, address: Address) {
        const prisma = new PrismaClient();

        try {
            const updateImmobile = await prisma.immobile.update({
                where: {
                    id: id
                },
                data: immobile
            })
            const idAddress = await prisma.immobile.findFirst({
                where: {
                    id: id
                },
                select: {
                    address_id: true
                },
            })
            const updateAddress = await prisma.address.update({
                where: {
                    id: idAddress?.address_id
                },
                data: address
            })
            return updateImmobile;
        } catch (error: any) {
            throw new Error(`Erro ao atualizar dados: ${error.message}`);
        }
    }
}