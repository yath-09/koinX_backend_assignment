import express,{ Router } from "express";
import { addCoins, getDeviatons, getStats } from "../controllers/coinsController";

const router: Router = express.Router();


router.get('/deviation',getDeviatons);
router.get('/stats',getStats);
export default router;


