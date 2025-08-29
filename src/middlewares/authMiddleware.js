import jwt from 'jsonwebtoken';
import { UnauthorizedError, AccessError } from '../errors/CustomErrors.js';
const { JsonWebTokenError } = jwt;

export const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) throw new JsonWebTokenError("Token is required");
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(error){
        throw new UnauthorizedError('Unauthorized');
    }
}

export const authorize = (roles = []) => {
    return (req, res, next) => {
        if (!roles.length) return next();

        const userRoles = req.user?.role || [];
        const hasRole = roles.some(role => userRoles.includes(role));

        if (!hasRole) throw new AccessError('Access Denied');

        next();
    };
}

