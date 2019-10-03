import { default as Router } from 'koa-router';
import { default as jwtMiddleware } from 'koa-jwt';

import { UserController, AuthController, MessageController } from 'controllers';
import { CONFIG } from 'config';

const router = new Router();
const userController: UserController = new UserController();
const authController: AuthController = new AuthController();
const messageController: MessageController = new MessageController();

// Public routes
router.post('/register', authController.registerNewUser);
router.post('/authenticate', authController.authenticate);

// Private routes
router.use(jwtMiddleware({
  secret: CONFIG.jwt_encryption,
}));
router.post('/authenticate/refresh', authController.refreshAccessToken);
router.post('/logout', authController.logout);
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserById);
router.put('/users', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);
router.get('/messages', messageController.getMessages);
router.post('/messages', messageController.postMessage);
router.patch('/messages/:messageId', messageController.updateMessage);
router.delete('/messages/:messageId', messageController.deleteMessage);

export { router };
