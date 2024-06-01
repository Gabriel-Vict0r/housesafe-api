import { Router } from "express";
import { CreateImmobileController } from "./controllers/CreateImmobileController";
import { CreateBrokerController } from "./controllers/CreateBrokerController";
import multer from "multer";
import multerConfig from './config/multer'
import { uploadImageMiddleware, uploadImagesMiddleware } from "./middlewares/UploadImageMiddleware";
import { validateBrokerMiddleware } from "./middlewares/ValidateBrokerMiddleware";
import { validateImmobileMiddleware } from "./middlewares/ValidateImmobileMiddleware";
import { CreateImageController } from "./controllers/CreateImageController";
const routes = Router()
const upload = multer(multerConfig)

routes.post('/broker',
    upload.single('image'),
    validateBrokerMiddleware,
    uploadImageMiddleware,
    new CreateBrokerController().handle)

routes.post('/immobile',
    validateImmobileMiddleware,
    new CreateImmobileController().handle,
    upload.array('image'),
    uploadImagesMiddleware,
    new CreateImageController().handle,
)
export { routes }