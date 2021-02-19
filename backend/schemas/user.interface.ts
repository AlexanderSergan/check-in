import { Document } from 'mongoose'

export interface IUserSchema extends Document {
    name: string;
    phone: number;
    checkInDate: Date;
}