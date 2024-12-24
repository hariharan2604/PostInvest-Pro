import { Op, Sequelize } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { dateObj } from '../utilities/dateFormatter.js'

import "../models/investment/InvestmentAssociation.js";
import "../models/receipt/ReceiptAssociation.js";
import Customer from '../models/customer/Customer.js';
import Investment from '../models/investment/Investment.js';
import SchemeDetail from '../models/investment/SchemeDetail.js';
import ReceiptCollection from '../models/receipt/ReceiptCollection.js';
import ReceiptDetail from '../models/receipt/ReceiptDetail.js';
import ReceiptType from '../models/receipt/ReceiptType.js';

export default class ReceiptController {
    async addReceipt(req, res) {
        const {
            receipt_type_id,
            customer_id,
            receipt_amount,
            chq_number,
            cheque_date,
            bank_id,
            instrument_class_id,
            sb_acc_number,
            receipt_details
        } = req.body;

        try {
            if (chq_number && cheque_date && bank_id && sb_acc_number && receipt_type_id == "a2b4f588-c31b-48a1-88d8-5d7958be432c") {
                const existingCheque = await ReceiptCollection.findAll({
                    where: {
                        chq_number: {
                            [Op.eq]: chq_number
                        }
                    }
                });
                if (existingCheque.length > 0) {
                    let data = { message: 'Cheque number already exists' }
                    return res.json(createApiResponse(data, 400));
                }
                const createdReceipt = await ReceiptCollection.create({
                    receipt_type_id,
                    receipt_date: Date.now(),
                    customer_id,
                    receipt_amount,
                    chq_number,
                    cheque_date: dateObj(cheque_date),
                    bank_id,
                    instrument_class_id: instrument_class_id != "" ? instrument_class_id : '72459613-8d19-497b-a2a5-4be980740a10',
                    sb_acc_number
                });
                let receipt_detail = await ReceiptController.addReceiptDetail(receipt_details, createdReceipt.id);

                let data = { message: 'Receipt Created', createdReceipt, receipt_detail }
                return res.json(createApiResponse(data, 201));
            }
            else if (receipt_type_id == "e35ad61e-2cb8-4110-b37c-dae78658521e") {
                const createdReceipt = await ReceiptCollection.create({
                    receipt_type_id,
                    receipt_date: Date.now(),
                    customer_id,
                    receipt_amount,
                    chq_number: null,
                    cheque_date: null,
                    bank_id: null,
                    instrument_class_id: '72459613-8d19-497b-a2a5-4be980740a10',
                    sb_acc_number: null
                });
                let receipt_detail = await ReceiptController.addReceiptDetail(receipt_details, createdReceipt.id);

                let data = { message: 'Receipt Created', createdReceipt, receipt_detail }
                return res.json(createApiResponse(data, 201));
            }
            else {
                let data = { message: 'Inappropriate data' }
                return res.json(createApiResponse(data, 400));
            }

        } catch (error) {
            console.log('error :39', error);
            let data = { message: 'Receipt Addition failed', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    static async addReceiptDetail(receipt_details, receipt_collection_id) {
        try {
            let receipt = [];
            for (const receipt_detail of receipt_details) {
                const createdReceiptDetail = await ReceiptDetail.create({
                    investment_id: receipt_detail.investment_id,
                    receipt_collection_id,
                    remittance_amount: receipt_detail.remittance_amount,
                    no_of_installments: receipt_detail.no_of_installments,
                    receipt_validity: "69f12a39-0b8d-48b4-acd8-520d02b527f2"
                });
                receipt.push(createdReceiptDetail.toJSON());
            }
            return receipt;
        } catch (error) {
            throw new Error("Error creating Receipt detail", error)
        }
    }

    async getReceipt(req, res) {
        try {
            const { customer_id, receipt_type_id } = req.body;
            let whereData = {};
            if (customer_id) {
                whereData.customer_id = customer_id;
            }
            if (receipt_type_id) {
                whereData.receipt_type_id = receipt_type_id;
            }
            const rows = await ReceiptCollection.findAll({
                where: whereData,
                attributes: [
                    'customer_id',
                    [Sequelize.col('ReceiptType.receipt_type_name'), 'receipt_type'],
                    [Sequelize.fn('SUM', Sequelize.col('receipt_amount')), 'total_amount'],
                    [Sequelize.fn('COUNT', Sequelize.col('ReceiptCollection.id')), 'receipt_count']
                ],
                include: {
                    model: ReceiptType,
                    attributes: [],
                },
                group: ['customer_id', Sequelize.col('ReceiptType.receipt_type_name')]
            });
            if (rows.length > 0) {
                const receipts = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count: receipts.length, receipts }, 200));
            } else {
                return res.json(createApiResponse({ count: rows.length }, 400));
            }
        } catch (error) {
            console.log('error :39', error);
            let data = { message: 'Receipt Fetch failed', errmsg: error };
            return res.json(createApiResponse(data, 500));
        }
    }


    async getReceiptDetail(req, res) {
        try {
            const { investment_id } = req.body;
            let whereData = {};
            if (investment_id) {
                whereData.investment_id = {
                    [Op.eq]: investment_id
                }
            }
            whereData.receipt_validity = {
                [Op.eq]: 'a5b803a0-e88a-4090-9031-e2f769f15a79'
            }

            const rows = await ReceiptDetail.findAll({
                attributes: [
                    [Sequelize.col('Investment.Customer.name'), 'customer_name'],
                    [Sequelize.col('Investment.SchemeDetail.scheme_name'), 'scheme_name'],
                    [Sequelize.col('Investment.SchemeDetail.scheme_code'), 'scheme_code'],
                    [Sequelize.col('Investment.investment_acc_no'), 'investment_acc_no'],
                    [Sequelize.col('ReceiptCollection.ReceiptType.receipt_type_name'), 'receipt_type_name'],
                    [Sequelize.fn('COUNT', Sequelize.col('investment_id')), 'receipt_count']
                ],
                where: whereData,
                include: [
                    {
                        model: ReceiptCollection,
                        attributes:[],
                        required: true,
                        include: [
                            {
                                model: ReceiptType,
                                attributes: []
                            },
                        ]
                    },
                    {
                        model: Investment,
                        attributes: [],
                        required: true,
                        include: [
                            {
                                model: Customer,
                                attributes: []
                            },
                            {
                                model: SchemeDetail,
                                attributes: []
                            }
                        ]
                    }
                ],
                group: [
                    Sequelize.col('Investment.investment_acc_no'),
                    Sequelize.col('ReceiptCollection.ReceiptType.receipt_type_name'),
                    Sequelize.col('Investment.Customer.name'),
                    Sequelize.col('Investment.SchemeDetail.scheme_name'),
                    Sequelize.col('Investment.SchemeDetail.scheme_code')
                ]
            });
            if (rows.length > 0) {
                const existingReceipts = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count: existingReceipts.length, existingReceipts }, 200));
            } else {
                return res.json(createApiResponse({ count: rows.length }, 400));
            }
        } catch (error) {
            console.log('error :39', error);
            let data = { message: 'Receipt Detail Fetch failed', errmsg: error };
            return res.json(createApiResponse(data, 500));
        }
    }
}