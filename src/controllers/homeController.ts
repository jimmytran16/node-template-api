import { NextFunction, Request, Response } from 'express';

class HomeController {
    async home(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        res.json({
            message: 'home route test',
            success:true
        })
    }
}

export default new HomeController();