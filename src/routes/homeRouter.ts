import express from 'express';
import HomeController from '../controllers/homeController';
const homeRouter = express.Router()

homeRouter
    .route("/")
    .get(HomeController.home)


export default homeRouter;