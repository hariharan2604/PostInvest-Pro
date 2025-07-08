import { Op, Sequelize } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { dateObj } from '../utilities/dateFormatter.js'
import '../models/investment/InvestmentAssociation.js';
import Investment from '../models/investment/Investment.js';
import InvestmentStatus from '../models/investment/InvestmentStatus.js';
import InvestmentDetail from '../models/investment/InvestmentDetail.js';
import SchemeDetail from '../models/investment/SchemeDetail.js';
import Customer from '../models/customer/Customer.js';
export default class InvestmentController {
    async addInvestment(req, res) {
        try {
            const {
                customer_id,
                investment_acc_no,
                scheme_id,
                investment_amount,
                tenure,
                investment_date,
                status_id
            } = req.body;
            const checkCif = await Customer.findByPk(customer_id);
            if (checkCif.cif == null) {
                let data = { message: 'Update Cif and add investment' }
                return res.json(createApiResponse(data, 400));
            }
            const existingInvestment = await Investment.findAll({
                where: { investment_acc_no: investment_acc_no },
            });
            if (existingInvestment.length > 0) {
                let data = { message: 'Investment Account number Already Exists' }
                return res.json(createApiResponse(data, 400));
            }
            else {
                let investment_created_date = dateObj(investment_date);
                let next_due = new Date(new Date(investment_created_date).setMonth(investment_created_date.getMonth() + 1));

                const createdInvestment = await Investment.create({
                    customer_id,
                    investment_acc_no,
                    scheme_id,
                    investment_amount,
                    tenure,
                    installment_amount: investment_amount / tenure,
                    investment_date: investment_created_date,
                    next_installment_due: next_due,
                    status_id
                });

                let data = { message: 'Investment Created', createdInvestment }
                return res.json(createApiResponse(data, 201));
            }
        } catch (error) {
            console.log('error :39', error);
            let data = { message: 'Investment Creation failed', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }
    async getInvestmentDetail(req, res) {
        try {
            const { investment_acc_no } = req.body;
            const { count, rows } = await Investment.findAndCountAll({
                where: {
                    investment_acc_no: investment_acc_no
                },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include:
                {
                    model: InvestmentDetail,
                },
            });
            if (count > 0) {
                const investment_detail = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count, investment_detail }, 200));
            }
            else {
                return res.json(createApiResponse({ count }, 200));
            }
        } catch (error) {
            console.log('error :66', error);
            let data = { message: 'Error Fetching Investment Detail', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }
    async getInvestment(req, res) {
        try {
            const { customer_id, investment_acc_no } = req.body;
            let whereData = {};
            if (customer_id) {
                whereData.customer_id = {
                    [Op.eq]: customer_id
                }
            }
            if (investment_acc_no) {
                whereData.investment_acc_no = {
                    [Op.eq]: investment_acc_no
                }
            }

            const { count, rows } = await Investment.findAndCountAll({
                where: whereData,
                attributes: {
                    include: [
                        [Sequelize.col('InvestmentStatus.investment_status_name'), 'investment_status'],
                        [Sequelize.col('SchemeDetail.scheme_name'), 'scheme_name'],
                        [Sequelize.col('SchemeDetail.scheme_code'), 'scheme_code']
                    ],
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: InvestmentStatus,
                        attributes: []
                    },
                    {
                        model: SchemeDetail,
                        attributes: []
                    },
                ]
            });

            if (count > 0) {
                const investments = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count, investments }, 200));
            }
            else {
                return res.json(createApiResponse({ count }, 400));
            }

        } catch (error) {
            console.log('error :115', error);
            let data = { message: 'Error getting Investments', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    async getSchemes(req, res) {
        try {
            const { count, rows } = await SchemeDetail.findAndCountAll({
                attributes: ['id', 'scheme_name'],
            });
            if (count > 0) {
                const scheme_detail = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count, scheme_detail }, 200));
            }
            else {
                return res.json(createApiResponse({ count }, 200));
            }
        } catch (error) {
            let data = { message: 'Error Fetching Scheme Detail', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }
}