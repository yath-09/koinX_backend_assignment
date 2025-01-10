import express,{ Router } from "express";
import { addCoins, getDeviatons} from "../controllers/coinsController";

const router: Router = express.Router();

router.get('/addCoins',addCoins);
router.get('/deviation',getDeviatons);
// router.get('/stats',getStats);
export default router;


