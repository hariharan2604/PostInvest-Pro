import { Op } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { dateObj } from '../utilities/dateFormatter.js'
import { arrayDifference } from '../utilities/arrayDifference.js';
import '../models/customer/CustomerAssociation.js';
import Customer from '../models/customer/Customer.js';
import CustomerRelationship from '../models/customer/CustomerRelationship.js';
import Investment from '../models/investment/Investment.js';
import SchemeDetail from '../models/investment/SchemeDetail.js';

export default class CustomerController {
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

            await CustomerController.updateRelations(relations.length > 0 ? relations : null, createdCustomer);

            let data = { message: 'Customer Creation successfull', createdCustomer }
            return res.json(createApiResponse(data, 200));
        } catch (error) {
            console.log('error :42', error);
            let data = { message: 'Customer Creation failed', errmsg: error }
            return res.json(createApiResponse(data, 500));
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

            const relationsToRemove = arrayDifference(oldRelations, relations);

            await CustomerController.updateRelations(relations.length > 0 ? relations : null, existingCustomer, relationsToRemove.length > 0 ? relationsToRemove : null)

            if (existingCustomer) {
                const updatedDetail = await existingCustomer.update({
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

                let data = { message: 'Customer Updation successfull', updatedCustomer: updatedDetail.toJSON() };
                return res.json(createApiResponse(data, 200));
            }
            else {
                let data = { message: 'Customer Not found' }
                return res.json(createApiResponse(data, 400));
            }
        } catch (error) {
            console.log('error :101', error);
            let data = { message: 'Customer Updation failed', errmsg: error }
            return res.json(createApiResponse(data, 500));
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
                const customers = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count, customers }, 200));
            }
            else {
                return res.json(createApiResponse({ count }, 400));
            }
        } catch (error) {
            console.log('error :135', error);
            let data = { message: 'Error getting Customer List', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    async getCustomerDetails(req, res) {
        try {
            const { customerId } = req.body;
            const rows = await Customer.findByPk(customerId, {
                include: [
                    {
                        model: Customer,
                        as: 'relatedCustomers',
                        through: { attributes: [] },
                        attributes: ['id', 'name']

                    },
                    {
                        model: Investment,
                        attributes: ['id', 'investment_acc_no', 'installment_amount', 'scheme_id']
                    }
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });
            if (rows) {
                const customers = rows.toJSON();
                for (const relation of customers.relatedCustomers) {
                    const details = await Customer.findByPk(relation.id, {
                        include: {
                            model: Investment,
                        }
                    });
                    relation.investment_count = details ? details.Investments.length : 0;
                }
                for (const investment of customers.Investments) {
                    const status = await SchemeDetail.findByPk(investment.scheme_id);
                    delete investment.scheme_id
                    investment.scheme_code = status.scheme_code;
                }
                return res.json(createApiResponse(customers, 200));
            }
            else {
                let data = { message: 'Customer Not found' }
                return res.json(createApiResponse(data, 400));
            }
        } catch (error) {
            console.log('error :207', error);
            let data = { message: 'Error getting Customer Detail', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    static async updateRelations(relations = null, Customer, relationsToRemove = null) {
        if (relations.length > 0) {
            relations.forEach(async (relation) => {
                await CustomerRelationship.findOrCreate({
                    where: {
                        customerId: Customer.id,
                        relatedCustomerId: relation
                    },
                    defaults: {
                        customerId: Customer.id,
                        relatedCustomerId: relation
                    }
                });
                await CustomerRelationship.findOrCreate({
                    where: {
                        relatedCustomerId: Customer.id,
                        customerId: relation
                    },
                    defaults: {
                        relatedCustomerId: Customer.id,
                        customerId: relation
                    }
                });
            });
        }
        if (relationsToRemove) {
            relationsToRemove.forEach(async (relationtoremove) => {
                await CustomerRelationship.destroy({
                    where: {
                        customerId: Customer.id,
                        relatedCustomerId: relationtoremove
                    },
                });
                await CustomerRelationship.destroy({
                    where: {
                        customerId: relationtoremove,
                        relatedCustomerId: Customer.id
                    },
                });
            });
        }
    }
}
