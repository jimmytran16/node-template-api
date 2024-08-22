import express, { Express } from 'express';
import routers from './src/routes';
const port = process.env.PORT || 8000;
const app: Express = express()


app.use(express.json())
app.use(express.urlencoded())
app.use("/", routers)
app.listen(port, () => console.log(`Listening on port ${port}`))