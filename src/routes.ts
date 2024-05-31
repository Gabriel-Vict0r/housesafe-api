import { Router } from "express";
import { CreateImmobileController } from "./controllers/CreateImmobileController";
import { CreateBrokerController } from "./controllers/CreateBrokerController";

const routes = Router()

routes.post('/broker', new CreateBrokerController().handle)
routes.post('/immobile', new CreateImmobileController().handle)

export { routes }