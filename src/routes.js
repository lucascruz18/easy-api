import { Router } from 'express';

import CandidateController from './app/controllers/CadidateController';

const routes = new Router();

routes.get('/candidates', CandidateController.index);
routes.get('/candidate/:id', CandidateController.show);
routes.post('/candidate', CandidateController.store);
routes.put('/candidate/:id', CandidateController.update);

export default routes;
