import { NextFunction, Request, Response } from "express";
import emailjs from '@emailjs/nodejs'
export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { message } = req.body;

    const templateParams = {
        from_name: message.name,
        message: message.message,
        email: message.email,
        subject: 'CLIENTE HOUSAFE',
        contact: message.phone,
    };
    try {
        const sendEmail = await emailjs.send(process.env.SERVICE_EMAIL!, 'template_j4usb0r', templateParams, { publicKey: process.env.PUBLIC_KEY, privateKey: process.env.PRIVATE_KEY })
        if (sendEmail.status === 200) {
            next()
        }
    } catch (err: any) {
        console.log(err)
        return res.status(500).json({ message: `Ocorreu um erro ao realizar o envio de email ${err.text}` })
    }
}   