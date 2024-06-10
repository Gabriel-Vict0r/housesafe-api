import { PrismaClient } from "../prisma/generated/client";
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class LoginAdminController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const prisma = new PrismaClient();

        const admin = await prisma.admin.findFirst({
            where: {
                email: email
            }
        });
        if (!admin) {
            return res.status(400).json({ message: 'O e-mail informado é inválido. ' })
        }
        const verifyPass = await bcrypt.compare(password, admin!.password);

        if (!verifyPass) {
            return res.status(400).json({ message: 'A senha informada é inválida. ' })
        }

        const token = jwt.sign({ id: admin!.id }, process.env.JWT_PASS ?? '', {
            expiresIn: '8h'
        })

        const { password: _, ...adminLogin } = admin;

        return res.status(200).json({
            user: adminLogin,
            token: token
        })
    }
}