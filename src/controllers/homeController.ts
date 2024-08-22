import { NextFunction, Request, Response } from 'express';

class HomeController {
    async home(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        res.json({
            message: 'home route',
            success:true
        })
    }
}

export default new HomeController();