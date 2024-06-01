import { object, ObjectSchema, setLocale, string } from "yup";
import { translation } from "../utils/translationYup";
import { NextFunction, Request, Response } from "express";
import { pt } from "yup-locale-pt";
interface IBroker {
    name: string;
    phone: string;
    email: string;
}

setLocale(pt);

//schema para validação dos dados
const linkSchema: ObjectSchema<IBroker> = object({
    name: string().required().min(4),
    phone: string().min(5).required(),
    email: string().email({ RegExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }).required()
})

export const validateBrokerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const broker = req.body
    console.log(broker)
    const validateBroker = { name: broker.name, phone: broker.phone, email: broker.email }
    console.log(broker)
    try {
        await linkSchema.validate(validateBroker);
        return next();
    } catch (error: any) {
        return res.status(200).json({ type: error.name, message: error.message })
    }
}