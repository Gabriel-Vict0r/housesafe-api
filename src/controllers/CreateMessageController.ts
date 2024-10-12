import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'



export class CreateMessageController {
    async handle(req: Request, res: Response) {
        const { message } = req.body
        const service = new CreateMessageService();

        const result = await service.execute(message);
        if (result instanceof Error) {
            return res.status(500).json({ message: result.message })
        }
        return res.status(201).json(result)
    }
}