import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadCAD } from "../controllers/file.controller.js";

const router = Router()

router.route('/').post(upload.single("file"), uploadCAD)


export default router