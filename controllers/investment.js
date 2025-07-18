import { Op, Sequelize } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { dateObj } from '../utilities/dateFormatter.js'
import '../models/investment/InvestmentAssociation.js';
import '../models/customer/CustomerAssociation.js';
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
            const { investmentId } = req.body;

            const investment = await Investment.findOne({
                where: {
                    id: investmentId
                },
                attributes: [
                    'id',
                    'investment_acc_no',
                    'investment_amount',
                    'installment_amount',
                    'investment_date',
                    'tenure',
                    [Sequelize.col('InvestmentStatus.investment_status_name'), 'investment_status'],
                    [Sequelize.col('SchemeDetail.scheme_name'), 'scheme_name'],
                    [Sequelize.col('SchemeDetail.scheme_code'), 'scheme_code'],
                    [Sequelize.col('Customer.name'), 'name']
                ],
                include: [
                    {
                        model: InvestmentStatus,
                        attributes: [],
                    },
                    {
                        model: SchemeDetail,
                        attributes: [],
                    },
                    {
                        model: InvestmentDetail,
                        attributes: [], 
                    },
                    {
                        model: Customer,
                        attributes: [] 
                    }
                ],
                raw: true
            });

            if (investment) {
                return res.json(createApiResponse(investment, 200));
            }
            else {
                let data = { message: 'Investment Details not found' }
                return res.json(createApiResponse(data, 400));
            }
        } catch (error) {
            let data = { message: 'Error Fetching Investment Detail', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    async getInvestment(req, res) {
        try {
            const { search } = req.body;

            const customers = await Customer.findAll({
                where: { agent_id: req.user.userId },
                attributes: ['id'],
            });

            const customerIds = customers.map(c => c.id);
            if (customerIds.length === 0) {
                return res.json(createApiResponse({ count: 0, investments: [] }, 200));
            }

            let investmentwhereData = {
                customer_id: { [Op.in]: customerIds }
            };

            if (search) {
                investmentwhereData[Op.or] = [
                    { investment_acc_no: { [Op.like]: `%${search}%` } },
                ];
            }

            const investmentResult = await Investment.findAndCountAll({
                where: investmentwhereData,
                attributes: [
                    'id',
                    'investment_acc_no',
                    [Sequelize.col('InvestmentStatus.investment_status_name'), 'investment_status'],
                    [Sequelize.col('SchemeDetail.scheme_name'), 'scheme_name'],
                    [Sequelize.col('SchemeDetail.scheme_code'), 'scheme_code']
                ],
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

            const investment = investmentResult.rows.map(row => row.toJSON());

            return res.json(createApiResponse({ count: investmentResult.count, investment }, 200));

        } catch (error) {
            console.log('error :115', error);
            let data = { message: 'Error getting Investments', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }


    async getSchemes(req, res) {
        try {
            const { count, rows } = await SchemeDetail.findAndCountAll({
                attributes: ['id', 'scheme_name', 'scheme_code'],
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