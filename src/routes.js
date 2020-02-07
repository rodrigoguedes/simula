import Router from 'express';
import User from './app/domain/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rodrigo Guedes de Souza',
    email: 'rodrigo1@guedesdesouza.com.br',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;
