import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import productRouter from './routes/product.routes'

const app = express()

app.use(express.json())

app.use('/', productRouter)

app.use((req: Request, res: Response) => {
    res.status(404).send('Page not found')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})

