import { Router } from 'express';
import HomeRouter from './homeRouter';

const router: Router = Router()

router.use('/', HomeRouter);

export default router;