import { Router } from "express";

const router = Router();

router.use(require('./userRouter'));
router.use(require('./loginRouter'));

export default router;
