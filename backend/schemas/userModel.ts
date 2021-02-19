import mongoose, { Schema, Model, Document } from 'mongoose'
import { IUserSchema } from './user.interface'

const requiredErrorText = (name: string) => [true, `No ${name} provided`]


const userSchema: Schema<IUserSchema> = new mongoose.Schema({
  
    name: {
        type: String,
        required: requiredErrorText('name'),
    },
    phone: {
        type: String,
        required: requiredErrorText('phone'),
    },
    checkInDate: {
        type: Date,
        required: requiredErrorText('Check in Date'),
    },
})

const model = mongoose.models.User || mongoose.model<IUserSchema>('User', userSchema)

export default model