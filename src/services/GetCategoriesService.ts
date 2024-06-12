import { PrismaClient } from "../prisma/generated/client";



export class GetCategoriesService {
    async execute() {
        const prisma = new PrismaClient();

        const result = await prisma.category.findMany();
        if (!result) {
            throw new Error('não há categorias cadastrados.')
        }
        return result;
    }
}