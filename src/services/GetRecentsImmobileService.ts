import { PrismaClient } from "../prisma/generated/client";



export class GetRecentsImmobileService {
    async execute() {
        const prisma = new PrismaClient();
        try {
            const recents = await prisma.immobile.findMany({
                where: {
                    NOT: {
                        status: 'X'
                    }
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    bathroom: true,
                    bedrooms: true,
                    recreation_area: true,
                    size: true,
                    created_at: true,
                    address: {
                        select: {
                            city: true,
                            state: true
                        }
                    },
                    category: {
                        select: {
                            description: true
                        }
                    },
                    type: {
                        select: {
                            description: true
                        }
                    }
                },
                orderBy: {
                    created_at: 'desc'
                }
            })
            return recents;
        } catch (error: any) {
            throw new Error(`erro ao executar a query: ${error.message}`);
        }
    }
}