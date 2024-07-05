import jwt from 'jsonwebtoken';
import { successResponse, errorResponse } from '../utilities/httpResponse.js';

function verifyToken(req, res, next) {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json(errorResponse({ message: 'Access denied' }));

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json(errorResponse({ message: 'Access denied' }));

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log('error :10', error);
        res.status(401).json(errorResponse({ message: 'Invalid token' }));
    }
}

export { verifyToken };
