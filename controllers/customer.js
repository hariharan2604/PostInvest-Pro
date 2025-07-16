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
                agent_id
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

            // await CustomerController.updateRelations(relations, createdCustomer);

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
                cif
            } = req.body;

            // const existingCustomer = await Customer.findByPk(id, {
            //     include: [
            //         {
            //             model: Customer,
            //             as: 'relatedCustomers',
            //             through: { attributes: [] },
            //             attributes: ['id', 'name']

            //         },
            //     ],
            // });
            const existingCustomer = await Customer.findByPk(id);



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
                // let oldRelations = existingCustomer.relatedCustomers;
                // oldRelations = oldRelations.map(item => item.id);

                // const relationsToRemove = arrayDifference(oldRelations, relations);

                // await CustomerController.updateRelations(relations, existingCustomer, relationsToRemove);

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

    async addRelation(req, res) {
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
                relationship,
                relation_id,
                cif
            } = req.body;
            let relatedCustomerId = relation_id;
            if (relation_id == null || relation_id == '') {
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
                    cif: cif || null,
                });
                relatedCustomerId = createdCustomer.id;
            }

            await CustomerRelationship.findOrCreate({
                where: {
                    customerId: id,
                    relatedCustomerId: relatedCustomerId,
                    relationship: relationship

                },
                defaults: {
                    customerId: id,
                    relatedCustomerId: relatedCustomerId,
                    relationship: relationship
                }
            });

            let data = { message: 'Relation Added Successfull' }
            return res.json(createApiResponse(data, 200));

        } catch (error) {
            console.log('error :101', error);
            let data = { message: 'Relation Addition failed', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    async getCustomers(req, res) {
        try {
            const { search } = req.body;

            let whereData = {
                agent_id: req.user.userId,
            };

            if (search) {
                whereData[Op.or] = [
                    { name: { [Op.like]: `%${search}%` } },
                    { mobile: { [Op.like]: `%${search}%` } },
                    { email: { [Op.like]: `%${search}%` } },
                    { cif: { [Op.like]: `%${search}%` } },
                ];
            }

            const { count, rows } = await Customer.findAndCountAll({
                attributes: ['id', 'name', 'mobile', 'email', 'area'],
                where: whereData
            });

            if (count > 0) {
                const customer = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count, customer }, 200));
            }
            else {
                return res.json(createApiResponse({ count }, 400));
            }
        } catch (error) {
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
                    const relation_type = await CustomerRelationship.findOne({
                        where: {
                            [Op.and]: [{ customerId: customerId, relatedCustomerId: relation.id }]
                        },
                        attributes: ['relationship']
                    })
                    relation.relation_type = relation_type.relationship;
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
                    investment.scheme_name = status.scheme_name;
                }
                return res.json(createApiResponse(customers, 200));
            }
            else {
                let data = { message: 'Customer Not found' }
                return res.json(createApiResponse(data, 400));
            }
        } catch (error) {
            let data = { message: 'Error getting Customer Detail', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    static async updateRelations(relations = null, Customer, relationsToRemove = null) {
        try {
            if (relations?.length > 0) {
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
            if (relationsToRemove?.length > 0) {
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
        catch (error) {
            throw new Error("Failed in updating relations");
        }
    }
}
