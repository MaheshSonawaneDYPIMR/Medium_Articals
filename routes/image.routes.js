import { Router } from "express";
import { postImage } from "../controllers/image.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/post",upload.single("image"),postImage)

export default router;
