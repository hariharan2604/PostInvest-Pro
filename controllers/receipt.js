import { Op, Sequelize } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { dateObj } from '../utilities/dateFormatter.js'
import {
    Customer, Investment, BankDetail, InstrumentClass, ReceiptCollection, ReceiptDetail, ReceiptType,
} from '../models/receipt/ReceiptAssociation.js';

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
            sb_acc_number
        } = req.body;

        try {
            if (chq_number && cheque_date && bank_id && sb_acc_number && receipt_type_id == "28ff97c4-fbd1-4f7b-8d12-fd190db8948e") {
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
                    instrument_class_id: instrument_class_id != "" ? instrument_class_id : '4f9c3663-06fe-4938-9fb5-7f384184394c',
                    sb_acc_number
                });
                let data = { message: 'Receipt Created', createdReceipt }
                return res.json(createApiResponse(data, 201));
            }
            else if (receipt_type_id == "8acd6eb2-0eb7-49f9-88d4-3b73ed323189") {
                const createdReceipt = await ReceiptCollection.create({
                    receipt_type_id,
                    receipt_date: Date.now(),
                    customer_id,
                    receipt_amount,
                    chq_number: null,
                    cheque_date: null,
                    bank_id: null,
                    instrument_class_id: '4f9c3663-06fe-4938-9fb5-7f384184394c',
                    sb_acc_number: null
                });
                let data = { message: 'Receipt Created', createdReceipt }
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
                    'receipt_type_id',
                    [Sequelize.fn('SUM', Sequelize.col('receipt_amount')), 'total_amount'],
                    [Sequelize.fn('COUNT', Sequelize.col('id')), 'receipt_count']
                ],
                group: ['customer_id', 'receipt_type_id']
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

}