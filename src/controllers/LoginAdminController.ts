import { PrismaClient } from "@prisma/client";
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
        if (admin instanceof Error) {
            return res.status(400).send('O e-mail informado é inválido')
        }
        const verifyPass = await bcrypt.compare(password, admin!.password);

        if (!verifyPass) {
            return res.status(400).send('A senha informada é inválida.')
        }

        const token = jwt.sign({ id: admin!.id }, process.env.JWT_PASS ?? '', {
            expiresIn: '8h'
        })
    }
}