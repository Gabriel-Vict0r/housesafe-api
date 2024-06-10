import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export class AuthMiddleware {
    async handle(req: Request, res: Response, next: NextFunction) {
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

        req.admin = loggedAdmin;
        next()
    }
}