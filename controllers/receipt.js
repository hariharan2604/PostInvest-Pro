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
import BankDetail from '../models/receipt/BankDetail.js';

export default class ReceiptController {
    static DEFAULT_INSTRUMENT_CLASS_ID = '9b6ce667-f95c-4675-b848-2ac107e4b92e';
    static CHEQUE_RECEIPT_ID = 'a2b4f588-c31b-48a1-88d8-5d7958be432c';
    static CASH_RECEIPT_ID = 'e35ad61e-2cb8-4110-b37c-dae78658521e';
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
        } = req.body;

        try {
            const isChequeReceipt = receipt_type_id === ReceiptController.CHEQUE_RECEIPT_ID;
            const isCashReceipt = receipt_type_id === ReceiptController.CASH_RECEIPT_ID;

            if (isChequeReceipt) {
                if (!chq_number || !cheque_date || !bank_id || !sb_acc_number) {
                    return res.json(createApiResponse({ message: 'Missing cheque details' }, 400));
                }

                const existingCheque = await ReceiptCollection.findAll({
                    where: { chq_number: { [Op.eq]: chq_number } }
                });

                if (existingCheque.length > 0) {
                    return res.json(createApiResponse({ message: 'Cheque number already exists' }, 400));
                }

                const createdReceipt = await ReceiptCollection.create({
                    receipt_type_id,
                    receipt_date: Date.now(),
                    customer_id,
                    receipt_amount,
                    chq_number,
                    cheque_date: dateObj(cheque_date),
                    bank_id,
                    instrument_class_id: instrument_class_id || DEFAULT_INSTRUMENT_CLASS_ID,
                    sb_acc_number,
                });

                return res.json(createApiResponse({ message: 'Receipt Created', createdReceipt }, 201));
            }

            if (isCashReceipt) {
                const createdReceipt = await ReceiptCollection.create({
                    receipt_type_id,
                    receipt_date: Date.now(),
                    customer_id,
                    receipt_amount,
                    chq_number: null,
                    cheque_date: null,
                    bank_id: null,
                    instrument_class_id: DEFAULT_INSTRUMENT_CLASS_ID,
                    sb_acc_number: null,
                });

                return res.json(createApiResponse({ message: 'Receipt Created', createdReceipt }, 201));
            }

            return res.json(createApiResponse({ message: 'Inappropriate data' }, 400));

        } catch (error) {

            console.log("🚀 ~ ReceiptController ~ addReceipt ~ error:", error);

            return res.json(createApiResponse({
                message: 'Receipt Addition failed',
                errmsg: error.message || error
            }, 500));
        }
    }

    async updateReceipt(req, res) {
        const {
            id,
            receipt_amount,
            chq_number,
            cheque_date,
            bank_id,
            instrument_class_id,
            sb_acc_number,
        } = req.body;

        try {
            const invalidCheque = await ReceiptCollection.findOne({ where: { chq_number: chq_number, bank_id: bank_id, sb_acc_number: sb_acc_number } });

            if (invalidCheque) {
                let data = { message: 'Invalid Cheque Details.' }
                return res.json(createApiResponse(data, 400));
            }

            const existingReceipt = await ReceiptCollection.findByPk(id);
            if (existingReceipt) {
                const updatedReceipt = await existingReceipt.update({
                    chq_number,
                    bank_id,
                    instrument_class_id,
                    sb_acc_number,
                    receipt_amount: receipt_amount,
                    cheque_date: cheque_date ? dateObj(cheque_date) : null
                });
                let data = { message: 'Receipt Updation successfull', updatedReceipt: updatedReceipt.toJSON() };
                return res.json(createApiResponse(data, 200));
            }
            else {
                let data = { message: 'Receipt Not found' }
                return res.json(createApiResponse(data, 400));
            }

        } catch (error) {
            console.log('error :101', error);
            let data = { message: 'Receipt Updation failed', errmsg: error }
            return res.json(createApiResponse(data, 500));
        }
    }

    async addReceiptsBulk(req, res) {
        const { entries = [] } = req.body;

        if (!Array.isArray(entries) || entries.length === 0) {
            return res.json(createApiResponse({ message: 'No receipt entries provided' }, 400));
        }

        const responses = [];

        for (let index = 0; index < entries.length; index++) {
            const entry = entries[index];
            const {
                receipt_type_id,
                customer_id,
                receipt_amount,
                chq_number,
                cheque_date,
                bank_id,
                instrument_class_id,
                sb_acc_number,
            } = entry;

            try {
                const isChequeReceipt = receipt_type_id === ReceiptController.CHEQUE_RECEIPT_ID;
                const isCashReceipt = receipt_type_id === ReceiptController.CASH_RECEIPT_ID;

                if (isChequeReceipt) {
                    if (!chq_number || !bank_id || !sb_acc_number) {
                        throw new Error("Missing cheque details");
                    }

                    const existing = await ReceiptCollection.findOne({
                        where: { chq_number: chq_number, bank_id: bank_id, sb_acc_number: sb_acc_number }
                    });

                    if (existing) {
                        throw new Error(`Cheque number ${chq_number} already exists`);
                    }

                    const created = await ReceiptCollection.create({
                        receipt_type_id,
                        receipt_date: Date.now(),
                        customer_id,
                        receipt_amount: receipt_amount || "",
                        chq_number,
                        cheque_date: cheque_date ? dateObj(cheque_date) : null,
                        bank_id,
                        instrument_class_id: instrument_class_id || ReceiptController.DEFAULT_INSTRUMENT_CLASS_ID,
                        sb_acc_number,
                    });

                    responses.push({ index, success: true, data: created });

                } else if (isCashReceipt) {
                    const created = await ReceiptCollection.create({
                        receipt_type_id,
                        receipt_date: Date.now(),
                        customer_id,
                        receipt_amount,
                        chq_number: null,
                        cheque_date: null,
                        bank_id: null,
                        instrument_class_id: ReceiptController.DEFAULT_INSTRUMENT_CLASS_ID,
                        sb_acc_number: null,
                    });

                    responses.push({ index, success: true, data: created });

                } else {
                    throw new Error(`Invalid receipt type ID`);
                }

            } catch (error) {
                responses.push({
                    index,
                    success: false,
                    error: error.message || 'Unknown error',
                    chq_number: chq_number || null
                });
            }
        }

        return res.json(createApiResponse({
            message: "Bulk receipt processing completed",
            summary: {
                total: entries.length,
                success: responses.filter(r => r.success).length,
                failed: responses.filter(r => !r.success).length,
            },
            responses: responses,
        }, 207));
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
            // const rows = await ReceiptCollection.findAll({
            //     where: whereData,
            //     attributes: [
            //         'customer_id',
            //         [Sequelize.col('ReceiptType.receipt_type_name'), 'receipt_type'],
            //         [Sequelize.fn('SUM', Sequelize.col('receipt_amount')), 'total_amount'],
            //         [Sequelize.fn('COUNT', Sequelize.col('ReceiptCollection.id')), 'receipt_count']
            //     ],
            //     include: {
            //         model: ReceiptType,
            //         attributes: [],
            //         include: {
            //             model: Investment,
            //             attributes:[],
            //         }
            //     },
            //     group: ['customer_id', Sequelize.col('ReceiptType.receipt_type_name')]
            // });
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
                [Op.eq]: '69f12a39-0b8d-48b4-acd8-520d02b527f2'
            }

            const rows = await ReceiptDetail.findAll({
                attributes: [
                    [Sequelize.col('Investment.Customer.name'), 'customer_name'],
                    [Sequelize.col('Investment.SchemeDetail.scheme_name'), 'scheme_name'],
                    [Sequelize.col('Investment.SchemeDetail.scheme_code'), 'scheme_code'],
                    [Sequelize.col('Investment.investment_acc_no'), 'investment_acc_no'],
                    [Sequelize.col('ReceiptCollection.ReceiptType.receipt_type_name'), 'receipt_type_name'],
                    [Sequelize.fn('COUNT', Sequelize.col('investment_id')), 'receipt_count'],
                    [Sequelize.fn('SUM', Sequelize.col('no_of_installments')), 'no_of_installments']
                ],
                where: whereData,
                include: [
                    {
                        model: ReceiptCollection,
                        attributes: [],
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
                const receipts = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count: receipts.length, receipts }, 200));
            } else {
                return res.json(createApiResponse({ count: rows.length }, 400));
            }
        } catch (error) {
            console.log('error :39', error);
            let data = { message: 'Receipt Detail Fetch failed', errmsg: error };
            return res.json(createApiResponse(data, 500));
        }
    }
    async getBanks(req, res) {
        try {
            const { count, rows } = await BankDetail.findAndCountAll({
                attributes: ['id', 'bank_name', 'code'],
                order: ['bank_name']
            });
            if (count > 0) {
                const bank_detail = rows.map(row => row.toJSON());
                return res.json(createApiResponse({ count, bank_detail }, 200));
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
