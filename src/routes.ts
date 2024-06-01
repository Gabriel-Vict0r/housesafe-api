import { Router } from "express";
import { CreateImmobileController } from "./controllers/CreateImmobileController";
import { CreateBrokerController } from "./controllers/CreateBrokerController";
import multer from "multer";
import multerConfig from './config/multer'
import { uploadImageMiddleware } from "./middlewares/UploadImageMiddleware";
import { validateBrokerMiddleware } from "./middlewares/ValidateBrokerMiddleware";
const routes = Router()
const upload = multer(multerConfig)

routes.post('/broker',
    upload.single('image'),
    validateBrokerMiddleware,
    uploadImageMiddleware,
    new CreateBrokerController().handle)


routes.post('/immobile', new CreateImmobileController().handle)

export { routes }