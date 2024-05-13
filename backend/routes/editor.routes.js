import express from 'express';  
import {create, remove, retrive, save} from '../controller/editor.controller.js';
import protectRoute from '../utilis/protectRoutes.js';

const router = express.Router();    

router.post("/create",protectRoute, create);
router.post("/save/:id", protectRoute, save);
router.post("/retrive/:id", protectRoute, retrive);
router.post("/remove/:id", protectRoute, remove);

export default router