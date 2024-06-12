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
import { LoginAdminController } from "./controllers/LoginAdminController";
import { GetProfileController } from "./controllers/GetProfileController";
import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { DisableBrokerController } from "./controllers/DisableBrokerController";
import { DisableImmobileController } from "./controllers/DisableImmobileController";
import { GetBrokerController } from "./controllers/GetBrokerController";
import { GetCategoriesController } from "./controllers/GetCategoriesController";
import { GetTypesController } from "./controllers/GetTypesController";
const routes = Router()
const upload = multer(multerConfig)


//rotas para a página de administradores
routes.post('/admin', new CreateAdminController().handle)
routes.post('/login', new LoginAdminController().handle)
//routes.get('/profile', new GetProfileController().handle);


//rotas para as categorias
routes.get('/get-categories', new GetCategoriesController().handle)

//rotas para os tipos de imóveis
routes.get('/get-types', new GetTypesController().handle)

//rotas para o corretor ~ broker' routes
routes.post('/create-broker',
    upload.single('image'),
    new AuthMiddleware().handle,
    validateBrokerMiddleware,
    uploadImageMiddleware,
    new CreateBrokerController().handle)

routes.put('/update-broker/:id',
    new AuthMiddleware().handle,
    validateBrokerMiddleware,
    new UpdateBrokerController().handle)

routes.patch('/disable-broker/:id',
    new AuthMiddleware().handle,
    new DisableBrokerController().handle
)

routes.get('/get-broker',
    new GetBrokerController().handle
)


//rotas para os imóveis - immobile routes
routes.post('/create-immobile',
    upload.array('image'),
    new AuthMiddleware().handle,
    validateImmobileMiddleware,
    new CreateImmobileController().handle,
    uploadImagesMiddleware,
    new CreateImageController().handle,
)

routes.put('/update-immobile/:id',
    new AuthMiddleware().handle,
    validateImmobileMiddleware,
    new UpdateImmobileController().handle
);

routes.patch('/disable-immobile/:id',
    new AuthMiddleware().handle,
    new DisableImmobileController().handle
)
routes.get('/recents-immobile',
    new GetRecentsImmobileController().handle
)
routes.get('/get-immobile/:id', new GetImmobileController().handle);
export { routes }