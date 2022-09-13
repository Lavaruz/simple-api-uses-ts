import express, {Request, Response} from 'express'
const app = express()

import {homeRoute} from './route/home'
import {aboutRoute} from './route/about'

app.use('/', homeRoute)
app.use('/about', aboutRoute)

app.listen(3000, () => {
    console.log('runrning at port 3000');
    
})