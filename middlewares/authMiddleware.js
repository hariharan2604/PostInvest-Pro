import jwt from 'jsonwebtoken';
import { createApiResponse } from '../utilities/httpResponse.js';

export const verifyAccessToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json(createApiResponse({ message: 'Access token missing' }, 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json(createApiResponse({ message: 'Invalid or expired access token', error: error.message }, 403));
    }
};
