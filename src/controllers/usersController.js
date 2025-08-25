import Users from './models/usersModel.js';


const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({email});
    if (!user) return res.status(404).json({
        message: 'User not found'
    });
    const isMatch = await user.comparePassword(password);
    if (isMatch) return res.status(200).json({success: true});
    else return res.status(401).json({message: "Unauthorized"});
}
const register = async (req, res) => {
    const { name, email, password } = req.body;
    await Users.create({name,email,password});
    res.status(200).json({success: true});
}

const UsersController = {
    login,
    register
}

export default UsersController;