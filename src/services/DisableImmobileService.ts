import { PrismaClient } from "../prisma/generated/client";




export class DisableImmobileService {
    async execute(id: number) {

        const prisma = new PrismaClient();

        const verify = await prisma.immobile.findUnique({ where: { id: id } })

        if (!verify) {
            throw new Error('Usuário não existente.');
        }

        const disabledImmobile = await prisma.immobile.update({ where: { id: id }, data: { status: 'X' } })

        return disabledImmobile;
    }
}