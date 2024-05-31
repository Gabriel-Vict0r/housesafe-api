import { Request, Response } from "express";



export class CreateAdminController {
    async handle(req: Request, res: Response) {
        const { name, login, password } = req.body

    }
}