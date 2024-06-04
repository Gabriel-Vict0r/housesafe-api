import { Address, Immobile, PrismaClient } from "@prisma/client";
import { IAddress, IImmobile } from "../interfaces/interfaces";




export class CreateImmobileService {
    async execute(address: Address, immobile: Immobile): Promise<Address | Error> {
        const prisma = new PrismaClient()
        const newImmobile = await prisma.address.create({
            data: {
                ...address, Immobile: {
                    create: immobile
                }
            },
            include: {
                Immobile: true,
            }
        })
        return newImmobile;
    }
}