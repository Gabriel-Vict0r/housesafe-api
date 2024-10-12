


export interface IImmobile {
    id_broker: number;
    description: string;
    address_id: number;
    price: number;
    additinal: number;
    size: number;
    bathroom: number;
    vehicle_vacany: number;
    bedrooms: number;
    recreation_area: number;
    pools: number;
    created_at: Date;
    updated_at: Date;
}

export interface IAddress {
    id?: number;
    street: string;
    district: string;
    city: string;
    state: string;
    number: string;
}

export interface IBroker {
    name: string;
    phone: string;
    email: string;
    image: File;
    created_at: Date;
}

export interface IMessage {
    name: string;
    phone: string;
    email: string;
    message: string;
}