import { Address, Immobile, PrismaClient } from "@prisma/client";
import { IAddress, IImmobile } from "../interfaces/interfaces";




export class CreateImmobileService {
    async execute(address: Address, immobile: Immobile) {
        const prisma = new PrismaClient()
        const { id_broker, description, price, additional, size, bathroom, vehicle_vacany, bedrooms, recreation_area, pools } = immobile;

        const addressbd = await prisma.address.create({
            data: address
        })
        const newImmobile = await prisma.immobile.create({
            data: {
                id_broker, description, address_id: addressbd.id, price, additional, size, bathroom, vehicle_vacany, bedrooms, recreation_area, pools
            }
        })
        return newImmobile;
    }
}