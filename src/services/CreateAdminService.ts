import { Admin, PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
export class CreateAdminService {
    async execute(admin: Admin) {
        const prisma = new PrismaClient();

        //criptografa a senha
        const hashPassword = await bcrypt.hash(admin.password, 10)
        try {
            const newAdmin = await prisma.admin.create({
                data: {
                    name: admin.name,
                    password: hashPassword,
                    email: admin.email,
                }
            })
            const { password, ...adminReturn } = newAdmin;
            return adminReturn;
        } catch (error) {
            throw new Error(`Erro ao cadastrar o admin: ${error}`);
        }
    }
}