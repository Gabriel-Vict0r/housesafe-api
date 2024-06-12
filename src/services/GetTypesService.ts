import { PrismaClient } from "../prisma/generated/client";



export class GetTypesService {
    async execute() {
        const prisma = new PrismaClient();

        const result = await prisma.type.findMany();
        if (!result) {
            throw new Error('não há tipos cadastrados.')
        }
        return result;
    }
}