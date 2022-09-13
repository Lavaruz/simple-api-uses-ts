import express, {Request, Response} from 'express'
const app = express()

app.get('/', (req: Request, res: Response): void => {
    res.json({message: 'this is created with ts file'})
})

app.listen(3000, () => {
    console.log('runrning at port 3000');
    
})