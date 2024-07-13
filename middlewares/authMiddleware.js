import jwt from 'jsonwebtoken';
import { createApiResponse } from '../utilities/httpResponse.js';

function verifyToken(req, res, next) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        let data = { message: 'Access denied' };
        return res.json(createApiResponse(data, 401));
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        let data = { message: 'Access denied' };
        return res.json(createApiResponse(data, 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        let data = { message: 'Token Expired', errmsg: error }
        res.json(createApiResponse(data,500));
    }
}

export { verifyToken };
