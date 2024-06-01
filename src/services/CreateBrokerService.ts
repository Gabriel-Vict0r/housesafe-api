import { Broker, PrismaClient } from "@prisma/client";
import { UploadImageService } from "./UploadImageService";


interface IBroker {
    broker: Broker;
    url: string;
}
export class CreateBrokerService {
    async execute({ broker, url }: IBroker) {
        const { name, phone, email } = broker;
        broker.image = url;
        const prisma = new PrismaClient();
        console.log('objeto criado', broker);
        const newBroker = await prisma.broker.create({ data: { name, phone, email, image: url } })
        return newBroker;
    }
}