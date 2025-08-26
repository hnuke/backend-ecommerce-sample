import Users from '../models/usersModel.js';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) return res.status(404).json({
        message: 'User not found'
    });
    const isMatch = await user.comparePassword(password);

    if (isMatch) {
        let token = jwt.sign({
            email: email 
        },process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION});
        return res.status(200).json({ success: true, token: token });
    }
    else return res.status(401).json({ message: "Unauthorized" });
}
const register = async (req, res) => {
    const { name, email, password } = req.body;
    await Users.create({ name, email, password });
    res.status(200).json({ success: true });
}

const UsersController = {
    login,
    register
}

export default UsersController;