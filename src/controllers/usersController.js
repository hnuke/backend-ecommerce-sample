import Users from '../models/usersModel.js';
import jwt from 'jsonwebtoken';
import { UnauthorizedError, NotFoundError } from '../errors/CustomErrors.js';

const login = async (req, res) => {
    const { email, password} = req.body;
    const user = await Users.findOne({ email });
    
    if (!user) throw new NotFoundError('User not found');

    const isMatch = await user.comparePassword(password);

    if (isMatch) {
        let token = jwt.sign({
            email: email,
            role: user.role
        },process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION});
        return res.status(200).json({ success: true, token: token, email, role: user.role });
    }
    else throw new UnauthorizedError('Unauthorized User');
}
const register = async (req, res) => {
    const { name, email, password } = req.body;
    // To do: Validate name, email, password, email duplicated in DB
    await Users.create({ name, email, password });
    res.status(200).json({ success: true });
}

const UsersController = {
    login,
    register
}

export default UsersController;