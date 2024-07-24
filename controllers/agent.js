import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { dateObj } from '../utilities/dateFormatter.js';
import { Agent, Credentials } from '../models/agent/AgentAssociation.js';

export default class Auth {
    async register(req, res) {
        try {
            const { name, password, mobile, email, gender, dob, address1, address2, area, state, city, zip } = req.body;
            console.log(new Date(dob));
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
            if (existingUser.length != 0) {
                let data = { message: 'Mobile or Email already Exists' }
                return res.json(createApiResponse(data, 200));
            }
            else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const agent = await Agent.create({
                    name,
                    mobile,
                    email,
                    gender,
                    dob: dateObj(dob),
                    address1,
                    address2,
                    area,
                    city,
                    state,
                    zip
                });
                await Credentials.create({
                    username: agent.mobile,
                    password: hashedPassword,
                    agent_id: agent.id
                });
                let data = { message: 'User Registration successful' };
                return res.json(createApiResponse(data, 200));
            }
        } catch (error) {
            let data = { message: 'Registration failed', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await Credentials.findOne({ where: { username } });
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
            return res.json(createApiResponse(data, 200));
        } catch (error) {
            let data = { message: 'Login failed', errmsg: error };
            return res.json(createApiResponse(data, 500));
        }
    }
}
