import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'



export class GetProfileController {
    async handle(req: Request, res: Response) {
        const { authorization } = req.headers

        if (!authorization) {
            res.status(401).json({ message: 'não autorizado' })
        }
        const token = authorization?.split(' ')[1]

        const { id } = jwt.verify(token!, process.env.JWT_PASS ?? '') as JwtPayload
        const prisma = new PrismaClient();

        const admin = await prisma.admin.findFirst({
            where: {
                id: id
            }
        });
        if (!admin) {
            res.status(401).json({ message: 'não autorizado' })
        }
        const { password: _, ...loggedAdmin } = admin!;
        return res.json(loggedAdmin)
    }
}