import { PrismaClient } from "../prisma/generated/client";


interface Iimage {
    id_immobile: number;
    url: string;
}
export class CreateImageService {
    async execute({ id_immobile, url }: Iimage) {
        const prisma = new PrismaClient;

        try {
            const newImage = await prisma.images.create({ data: { id_immobile: id_immobile, url: url } })
            return newImage;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}