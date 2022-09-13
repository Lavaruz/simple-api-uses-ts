import express,{Request, Response} from 'express'

const aboutRoute = express.Router()

aboutRoute.get('/', (req: Request, res: Response): void => {
    res.json({
        name: 'Assami Muzaki',
        age: 20,
        hobby: 'code',
        married: false
    })
})

export {aboutRoute}