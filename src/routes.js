import Router from 'express';

import UserResource from './app/resource/UserResource';
import SessionResouce from './app/resource/SessionResource';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserResource.create);
routes.post('/sessions', SessionResouce.create);

routes.use(authMiddleware);
routes.put('/users', UserResource.update);

export default routes;
