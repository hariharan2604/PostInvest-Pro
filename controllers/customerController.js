// import Customer from '../models/Customer.js';
import { Op } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { dateObj } from '../utilities/dateFormatter.js'
import '../models/Association.js';
import Customer from '../models/Customer.js';
import CustomerRelationship from '../models/CustomerRelationship.js';
import { arrayDifference } from '../utilities/arrayDifference.js';

export default class Customer_controller {
    async createCustomer(req, res) {
        try {
            const {
                name,
                dob,
                gender,
                mobile,
                email,
                address1,
                address2,
                area,
                city,
                state,
                zip,
                agent_id,
                relations
            } = req.body;

            const createdCustomer = await Customer.create({
                name,
                dob: dateObj(dob),
                gender,
                mobile,
                email,
                address1,
                address2,
                area,
                city,
                state,
                zip,
                agent_id,
                cif: null,
            });

            if (relations.length > 0) {
                relations.forEach(async (relation) => {
                    await CustomerRelationship.findOrCreate({
                        where: {
                            customerId: createdCustomer.id,
                            relatedCustomerId: relation
                        },
                        defaults: {
                            customerId: createdCustomer.id,
                            relatedCustomerId: relation
                        }
                    });
                    await CustomerRelationship.findOrCreate({
                        where: {
                            relatedCustomerId: createdCustomer.id,
                            customerId: relation
                        },
                        defaults: {
                            relatedCustomerId: createdCustomer.id,
                            customerId: relation
                        }
                    });
                });
            }

            let data = { message: 'Customer Creation successfull' }
            res.json(createApiResponse(data, 200));
        } catch (error) {
            console.log('error :42', error);
            let data = { message: 'Customer Creation failed', errmsg: error }
            res.json(createApiResponse(data, 500));
        }
    }

    async updateCustomer(req, res) {
        try {
            const {
                id,
                name,
                dob,
                gender,
                mobile,
                email,
                address1,
                address2,
                area,
                city,
                state,
                zip,
                agent_id,
                cif,
                relations
            } = req.body;

            // const existingCustomer = await Customer.findByPk(id);
            const existingCustomer = await Customer.findByPk(id, {
                include: [
                    {
                        model: Customer,
                        as: 'relatedCustomers',
                        through: { attributes: [] },
                        attributes: ['id', 'name']

                    },
                ],
            });
            let oldRelations = existingCustomer.relatedCustomers;
            oldRelations = oldRelations.map(item => item.id);
            console.log("old:",oldRelations);
            console.log("new:",relations);
            const relationsToRemove = arrayDifference(oldRelations, relations);
            if (relationsToRemove.length > 0) {
                relationsToRemove.forEach(async (relationtoremove) => {
                    await CustomerRelationship.destroy({
                        where: {
                            customerId: existingCustomer.id,
                            relatedCustomerId: relationtoremove
                        },
                    });
                    await CustomerRelationship.destroy({
                        where: {
                            customerId: relationtoremove,
                            relatedCustomerId: existingCustomer.id
                        },
                    });
                });
            }
            if (relations.length > 0) {
                relations.forEach(async (relation) => {
                    await CustomerRelationship.findOrCreate({
                        where: {
                            customerId: existingCustomer.id,
                            relatedCustomerId: relation
                        },
                        defaults: {
                            customerId: existingCustomer.id,
                            relatedCustomerId: relation
                        }
                    });
                    await CustomerRelationship.findOrCreate({
                        where: {
                            relatedCustomerId: existingCustomer.id,
                            customerId: relation
                        },
                        defaults: {
                            relatedCustomerId: existingCustomer.id,
                            customerId: relation
                        }
                    });
                });
            }
            if (existingCustomer) {
                await existingCustomer.update({
                    name,
                    cif,
                    dob: dateObj(dob),
                    gender,
                    mobile,
                    email,
                    address1,
                    address2,
                    area,
                    city,
                    state,
                    zip,
                    agent_id,
                });

                let data = { message: 'Customer Updation successfull' }
                res.json(createApiResponse(data, 200));
            }
            else {
                let data = { message: 'Customer Not found' }
                res.json(createApiResponse(data, 400));
            }
        } catch (error) {
            console.log('error :101', error);
            let data = { message: 'Customer Updation failed', errmsg: error }
            res.json(createApiResponse(data, 500));
        }
    }

    async getCustomers(req, res) {
        try {
            const { name, mobile, email } = req.body;
            let whereData = {};
            if (name) {
                whereData.name = {
                    [Op.like]: `%${name}%`
                };
            }
            if (mobile) {
                whereData.mobile = {
                    [Op.like]: `%${mobile}%`
                };
            }
            if (email) {
                whereData.email = {
                    [Op.like]: `%${email}%`
                };
            }
            const { count, rows } = await Customer.findAndCountAll({ attributes: ['id', 'name'], where: whereData });

            if (count > 0) {
                res.json(createApiResponse({ count, customers: rows }, 200));
            }
            else {
                res.json(createApiResponse({ count }, 400));
            }
        } catch (error) {
            console.log('error :135', error);
            let data = { message: 'Error getting Customer List', errmsg: error }
            res.json(createApiResponse(data, 500));
        }
    }

    async getCustomerDetails(req, res) {
        try {
            const { customerId } = req.body;
            const customer = await Customer.findByPk(customerId, {
                include: [
                    {
                        model: Customer,
                        as: 'relatedCustomers',
                        through: { attributes:[]},
                        attributes: ['id', 'name']

                    },
                ],
            });
            if (customer)
                res.json(createApiResponse({ customer }, 200));
            else {
                let data = { message: 'Customer Not found' }
                res.json(createApiResponse(data, 400));
            }
        } catch (error) {
            let data = { message: 'Error getting Customer Detail', errmsg: error }
            res.json(createApiResponse(data, 500));
        }
    }
}
