import express from 'express';  
import {signup,login, logout, changePassword} from '../controller/auth.controller.js';
import protectRoute from '../utilis/protectRoutes.js';

const router = express.Router();    

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/password/change",protectRoute, changePassword);

export default router;