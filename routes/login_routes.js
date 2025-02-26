import express from "express";
import {signUp, signIn} from "../controllers/login_controllers.js";
const router=express.Router();

router.route("/signUp").post(signUp);
router.route("/signIn").post(signIn);

export default router;