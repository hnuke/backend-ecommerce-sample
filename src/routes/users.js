import express from 'express';
import {body} from 'express-validator';
import UsersController from '../controllers/usersController.js';
const router = express.Router();

router.post('/login', UsersController.login);
router.post('/register', body('email').trim().isEmail(),UsersController.register);

export default router;

