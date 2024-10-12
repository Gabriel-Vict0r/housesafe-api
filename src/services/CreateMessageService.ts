import { IMessage } from "../interfaces/interfaces";
import { message, PrismaClient } from "../prisma/generated/client";



export class CreateMessageService {
    async execute(message: IMessage): Promise<message | Error> {
        try {
            const prisma = new PrismaClient();
            const result = await prisma.message.create({
                data: message
            })
            return result;
        } catch (error) {
            return new Error('Ocorreu um erro ao tentar gravar os dados.');
        }
    }
}