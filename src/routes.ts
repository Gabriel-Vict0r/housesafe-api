import { Router } from "express";
import { CreateImmobileController } from "./controllers/CreateImmobileController";
import { CreateBrokerController } from "./controllers/CreateBrokerController";
import multer from "multer";
import multerConfig from './config/multer'
import { uploadImageMiddleware, uploadImagesMiddleware } from "./middlewares/UploadImageMiddleware";
import { validateBrokerMiddleware } from "./middlewares/ValidateBrokerMiddleware";
import { validateImmobileMiddleware } from "./middlewares/ValidateImmobileMiddleware";
import { CreateImageController } from "./controllers/CreateImageController";
import { UpdateImmobileController } from "./controllers/UpdateImmobileController";
import { UpdateBrokerController } from "./controllers/UpdateBrokerController";
import { GetRecentsImmobileController } from "./controllers/GetRecentsImmobileController";
import { GetImmobileController } from "./controllers/GetImmobileController";
import { CreateAdminController } from "./controllers/CreateAdminController";
const routes = Router()
const upload = multer(multerConfig)


routes.post('/admin', new CreateAdminController().handle)
routes.post('/login', new CreateAdminController().handle)
routes.post('/broker',
    upload.single('image'),
    validateBrokerMiddleware,
    uploadImageMiddleware,
    new CreateBrokerController().handle)

routes.post('/immobile',
    upload.array('image'),
    validateImmobileMiddleware,
    new CreateImmobileController().handle,
    uploadImagesMiddleware,
    new CreateImageController().handle,
)

routes.put('/immobile/:id',
    validateImmobileMiddleware,
    new UpdateImmobileController().handle
);

routes.put('/broker/:id',
    validateBrokerMiddleware,
    new UpdateBrokerController().handle)

routes.get('/recents-immobile',
    new GetRecentsImmobileController().handle
)
routes.get('/immobile/:id', new GetImmobileController().handle);
export { routes }