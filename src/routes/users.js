import express from 'express';
import UsersController from '../controllers/usersController.js';
const router = express.Router();

router.post('/api/user/login', UsersController.login);
router.post('/api/user/register', UsersController.register);

export default router;

