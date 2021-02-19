import mongoose from 'mongoose'
mongoose.Promise = global.Promise
let isConnected

const logFinishTime = start => console.log(`=> Done in ${(Date.now() - start) / 1000}s`)

const establishMongooseConnection = async (): Promise<void> => {

    const start = Date.now()

    if (isConnected) {
        console.log('=> using existing database connection')
        logFinishTime(start)
        return Promise.resolve()
    }
    console.log('=> using new database connection')


    return mongoose.connect(process.env.MONGODB_URI)
        .then(db => {
            console.log('🤖 db connected')
            isConnected = db.connections[0].readyState
            logFinishTime(start)
            return Promise.resolve()
            // return db
        })

}

export default establishMongooseConnection