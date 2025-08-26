import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(403).json({ message: 'Token is required'});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(error){
        return res.status(401).json({message: 'Unauthorized'});
    }
}

export const authorize = (roles = []) => {
    return (req, res, next) => {
        if (!roles.length) return next();

        const userRoles = req.user?.role || [];
        const hasRole = roles.some(role => userRoles.includes(role));

        if (!hasRole) return res.status(403).json({message: 'Access Denied'});

        next();
    };
}

