import express from 'express';
import UsersController from '../controllers/usersController.js';
const router = express.Router();

router.post('/login', UsersController.login);
router.post('/register', UsersController.register);

export default router;

