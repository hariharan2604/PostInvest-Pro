import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Op, Sequelize } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { Agent, Credentials } from '../models/agent/AgentAssociation.js';
import { getKey, setKey, deleteKey } from '../db/redisClient.js';
export default class Auth {
    static generateAccessToken(payload) {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' }); // 15-minute expiry
    }

    // Generate Refresh Token (long-lived token)
    static generateRefreshToken(payload) {
        return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' }); // 7-day expiry
    }

    async refreshAccessToken(req, res) {
        const refreshToken = req.header('Authorization')?.split(' ')[1]; 

        if (!refreshToken) {
            return res.json(createApiResponse({ message: 'Refresh token missing' }, 401));
        }

        try {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            const user = await getKey(decoded.userId);

            if (!user) {
                return res.json(createApiResponse({ message: 'Invalid refresh token' }, 403));
            }

            const newAccessToken = Auth.generateAccessToken({ userId: decoded.userId });

            return res.json(createApiResponse({ accessToken: newAccessToken }, 200));
        } catch (error) {
            return res.json(createApiResponse({ message: 'Invalid or expired refresh token', error: error.message }, 403));
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;

            const user = await Credentials.findOne({
                where: { username },
                include: {
                    model: Agent,
                    attributes: []
                },
                attributes: {
                    include: [
                        [Sequelize.col('Agent.name'), 'name'],
                    ],
                },
            });

            if (!user) {
                return res.json(createApiResponse({ message: 'Authentication failed' }, 400));
            }

            const passwordMatch = bcrypt.compareSync(password, user.password);

            if (!passwordMatch) {
                return res.json(createApiResponse({ message: 'Authentication failed' }, 401));
            }

            const payload = { userId: user.agent_id }; 

            const accessToken = Auth.generateAccessToken(payload);
            const refreshToken = Auth.generateRefreshToken(payload);

            await setKey(user.agent_id, refreshToken, 604800);

            const { name, agent_id } = user.toJSON();

            const data = {
                accessToken, refreshToken, name: name, id: agent_id
            }

            return res.json(createApiResponse(data, 200));

        } catch (error) {
            console.log(error);

            return res.json(createApiResponse({ message: 'Login failed' }, 500));
        }
    }

    async logout(req, res) {
        try {
            const refreshToken = req.header('Authorization')?.split(' ')[1]; // Extract refresh token from header
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

            if (!refreshToken) {
                return res.json(createApiResponse({ message: 'Refresh token missing' }, 400));
            }

            const result = await deleteKey(decoded.userId);
            if (result == 0) {
                return res.json(createApiResponse({ message: 'Logout failed' }, 400));
            }
            return res.json(createApiResponse({ message: 'Logged out successfully' }, 200));
        } catch (error) {
            return res.json(createApiResponse({ message: 'Invalid Token Error' }, 500));
        }
    }

    async register(req, res) {
        try {
            const { name, password, mobile, email, gender, dob, address1, address2, area, state, city, zip } = req.body;

            const existingUser = await Agent.findAll({
                where: {
                    [Op.or]: [{
                        email: { [Op.eq]: email }
                    },
                    {
                        mobile: { [Op.eq]: mobile }
                    }]
                }
            });

            if (existingUser.length > 0) {
                return res.json(createApiResponse({ message: 'Mobile or Email already exists' }, 400));
            } else {
                const hashedPassword = await bcrypt.hash(password, 10); // Hash password before storing
                const agent = await Agent.create({
                    name,
                    mobile,
                    email,
                    gender,
                    dob,
                    address1,
                    address2,
                    area,
                    city: city.value,
                    state: state.value,
                    zip
                });

                await Credentials.create({
                    username: agent.mobile,
                    password: hashedPassword,
                    agent_id: agent.id
                });

                return res.json(createApiResponse({ message: 'User Registration successful' }, 200));
            }
        } catch (error) {
            return res.json(createApiResponse({ message: 'Registration failed' }, 500));
        }
    }
}
