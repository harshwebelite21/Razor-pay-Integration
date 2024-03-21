import { Router } from "express";
import {
  checkout,
  paymentVerification,
} from "../controller/paymentController.js";

const router = Router();

router.post("/checkout", checkout);
router.post("/paymentverification", paymentVerification);

export default router;
