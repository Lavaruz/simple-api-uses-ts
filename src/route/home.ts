import express,{Request, Response} from 'express'

const homeRoute = express.Router()

homeRoute.get('/', (req: Request, res: Response): void => {
    res.json({message: 'this is created with ts file'})
})

export {homeRoute}