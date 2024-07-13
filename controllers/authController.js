import Agent from '../models/Agent.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createApiResponse } from '../utilities/httpResponse.js';
import { Op } from 'sequelize';

class Auth {
    async register(req, res) {
        try {
            const { username, password, mobile, email, gender, dob, address, area, state, zip } = req.body;
            const existingUser = await Agent.findAll({
                where: {
                    [Op.or]: [{
                        email: {
                            [Op.eq]: email
                        },
                        mobile: {
                            [Op.eq]: mobile
                        }
                    }]
                }
            });
            if (existingUser.rows != 0) {
                let data = { message: 'Mobile or Email already Exists' }
                res.json(createApiResponse(data, 200));
            }
            else {
                const hashedPassword = await bcrypt.hash(password, 10);
                await Agent.create({
                    username,
                    password: hashedPassword,
                    mobile,
                    email,
                    gender,
                    dob: Date(dob), // Ensure dob is converted to Date object
                    address,
                    area,
                    state,
                    zip
                });
                let data = { message: 'User Registration successful' };
                res.json(createApiResponse(data, 200));
            }
        } catch (error) {
            let data = { message: 'Registration failed', errmsg: error }
            res.json(createApiResponse(data, 500));
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await Agent.findOne({ where: { username } });
            if (!user) {
                let data = { message: 'Authentication failed' }
                return res.json(createApiResponse(data, 400));
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                let data = { message: 'Authentication failed' }
                return res.json(createApiResponse(data, 401));
            }
            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
                expiresIn: "1h",
            });
            let data = { token };
            res.json(createApiResponse(data, 200));
        } catch (error) {
            let data = { message: 'Login failed', errmsg: error };
            res.json(createApiResponse(data, 500));
        }
    }
}

export { Auth }