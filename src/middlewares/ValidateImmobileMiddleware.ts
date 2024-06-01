import { number, object, ObjectSchema, string } from "yup";


interface Immobile {
    street: string;
    district: string;
    city: string;
    state: string;
    number: number;
    description: string;
    price: number;
    additional?: string;
    size: number;
    bathroom: number;
    vehicle_vacany: number;
    recreation_area: number;
    pools: number;
    bedrooms: number;
}
// const linkSchema: ObjectSchema<Immobile> = object({
//     street: string().min(5).required(),
//     district: string().min(3).required(),
//     city: string().min(2).max(50).required(),
//     state: string().min(2).max(3).required(),
//     number: number().required(),
//     description: string().min(10).required(),
//     price: number().required(),
//     additional: string().min(10).optional(),
//     size: number().required(),
//     bathroom: number().required(),
//     vehicle_vacany: number().required(),
//     pools: number().required(),
//     bedrooms: number().required()
// })