import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserResource from './app/resource/UserResource';
import SessionResouce from './app/resource/SessionResource';
import FileResource from './app/resource/FileResource';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserResource.create);
routes.post('/sessions', SessionResouce.create);

routes.use(authMiddleware);
routes.put('/users', UserResource.update);
routes.get('/users', UserResource.list);

routes.post('/files', upload.single('file'), FileResource.upload);

export default routes;
