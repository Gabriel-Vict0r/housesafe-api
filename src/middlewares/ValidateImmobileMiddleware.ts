import { NextFunction, Request, Response } from "express";
import { number, object, ObjectSchema, string } from "yup";


interface Immobile {
    street: string;
    district: string;
    city: string;
    state: string;
    number: number;
    title: string;
    description: string;
    price: number;
    additional?: string;
    size: number;
    bathroom: number;
    vehicle_vacany: number;
    recreation_area: number;
    pools: number;
    bedrooms: number;
    id_category: number;
    id_type: number;
}
const linkSchema: ObjectSchema<Immobile> = object({
    street: string().min(5).required(),
    district: string().min(3).required(),
    city: string().min(2).max(50).required(),
    state: string().min(2).max(3).required(),
    number: number().required(),
    title: string().min(4).required(),
    description: string().min(10).required(),
    price: number().required(),
    additional: string().min(10).optional(),
    size: number().required(),
    bathroom: number().required(),
    recreation_area: number().required(),
    vehicle_vacany: number().required(),
    pools: number().required(),
    bedrooms: number().required(),
    id_category: number().required(),
    id_type: number().required(),
})

export const validateImmobileMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let { immobile } = req.body
    let { address } = req.body
    console.log(immobile);
    if (typeof immobile !== 'object') {
        address = JSON.parse(address)
        immobile = JSON.parse(immobile)
    }
    const validateImobile: Immobile = {
        street: address.street,
        district: address.district,
        city: address.city,
        state: address.state,
        number: address.number,
        title: immobile.title,
        description: immobile.description,
        price: immobile.price,
        additional: immobile.additional,
        size: immobile.size,
        bathroom: immobile.bathroom,
        vehicle_vacany: immobile.vehicle_vacany,
        recreation_area: immobile.recreation_area,
        pools: immobile.pools,
        bedrooms: immobile.bedrooms,
        id_category: immobile.id_category,
        id_type: immobile.id_type
    }
    console.log('objeto', validateImobile)
    try {
        await linkSchema.validate(validateImobile);
        return next();
    } catch (error: any) {
        return res.status(400).json({ type: error.type, message: error.message })
    }
}