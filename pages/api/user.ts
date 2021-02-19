console.log('yep')
import mongooseConnection from '../../backend/mongooseConnection'
import userModel from '../../backend/schemas/userModel'
// import { IUserSchema } from '../../../next-redux-obs/backend/schemas/userModel.interface';

const createUser = async (req, res) => {
    const db = await mongooseConnection()
    const { body: { name, phone }  } = req


    try {
        const created = await userModel.create({ name, phone, checkInDate: new Date()})
        res.status(201).json(created)
    } catch (error) {
        res.status(406).json(error)
    }
}

const getUsers = async ( req, res ) => {

    const db = await mongooseConnection()

    try {
        const users = await userModel.find({})
        res.status(200).json(users)
    } catch (err) {
        
    }
}


export default async (req, res) => {

    const { method } = req

    switch (method) {

        case 'GET': 
            getUsers(req, res)
            break

        case 'POST':
            createUser(req, res)
            break

        default:
            res.status(501).end()
    }

}