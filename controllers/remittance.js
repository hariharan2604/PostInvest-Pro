import { Op, Sequelize } from 'sequelize';
import { createApiResponse } from '../utilities/httpResponse.js';
import { dateObj } from '../utilities/dateFormatter.js'
import "../models/remittance/RemittanceAssociation.js"
import Investment from '../models/investment/Investment.js';
import RemittanceProcess from '../models/remittance/RemittanceProcess.js';
import ProcessCalendar from '../models/remittance/ProcessCalendar.js';
import RemittanceProcessDetail from '../models/remittance/RemittanceProcessDetail.js';
import Customer from '../models/customer/Customer.js';
import ReceiptDetail from '../models/receipt/ReceiptDetail.js';
import ReceiptCollection from '../models/receipt/ReceiptCollection.js';
import BankDetail from '../models/receipt/BankDetail.js';
import ReceiptType from '../models/receipt/ReceiptType.js';
export default class RemittanceController {
    async createBatches(batch) {
        try {
            const now = new Date();
            const startMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const firstHalf = new Date(now.getFullYear(), now.getMonth(), 15);
            const secondHalf = new Date(now.getFullYear(), now.getMonth() + 1, 0);
            let whereData = {}
            if (batch == 1) {
                whereData.next_installment_due =
                {
                    [Op.and]: {
                        [Op.lte]: {
                            firstHalf
                        },
                        [Op.gte]: {
                            startMonth
                        }
                    }
                }
            }
            else {
                whereData.next_installment_due =
                {
                    [Op.and]: {
                        [Op.lte]: {
                            secondHalf
                        },
                        [Op.gt]: {
                            firstHalf
                        }
                    }
                }
            }
            const investmentsDueCountFirstBatch = await Investment.count(
                {
                    where: whereData
                }
            );
            const investmentList = await RemittanceController.getInvestmentDetails(whereData, 50, investmentsDueCountFirstBatch);

            RemittanceController.createRemittanceProcess(investmentList, now.getFullYear(), now.getMonth(), batch);

        } catch (error) {
            console.log('error :39', error);
            let data = { message: 'Batch Creation failed', errmsg: error };
            return res.json(createApiResponse(data, 500));
        }
    }

    static async getInvestmentDetails(whereData, batchSize, totalRecords) {
        try {
            let investmentsArray = [];
            const totalPages = Math.ceil(totalRecords / batchSize);
            for (let page = 1; page <= totalPages; page++) {
                const records = await Investment.findAll({
                    where: whereData,
                    limit: batchSize,
                    attributes: {
                        include: [
                            [Sequelize.col('Customer.id'), 'customer_id'],
                            [Sequelize.col('Investment.id'), 'investment_id'],
                            [Sequelize.col('ReceiptCollection.ReceiptDetail.id'), 'receipt_detail_id'],
                            [Sequelize.col('ReceiptCollection.ReceiptType.id'), 'receipt_type_id'],
                            [Sequelize.col('ReceiptCollection.id'),'receipt_collection_id'],
                            [Sequelize.col('ReceiptCollection.ReceiptType.remittance_amount'), 'remittance_amount'],
                            [Sequelize.col('ReceiptCollection.ReceiptDetail.no_of_installments'), 'no_of_installments'],
                            [Sequelize.col('ReceiptCollection.chq_number'), 'cheque_number'],
                            [Sequelize.col('Investment.investment_acc_no'), 'investment_acc_no'],
                            [Sequelize.col('BankDetail.bank_name'), 'bank_name'],
                            [Sequelize.col('ReceiptCollection.sb_acc_number'), 'sb_acc_number'],
                        ]
                    },
                    offset: (page - 1) * batchSize,
                    include: [
                        {
                            model: Customer,
                            attributes: []
                        },
                        {
                            model: ReceiptCollection,
                            attributes: [],
                            include: [
                                {
                                    model: ReceiptDetail,
                                    attributes: [],
                                },
                                {
                                    model: BankDetail,
                                    attributes: [],
                                },
                                {
                                    model: ReceiptType,
                                    attributes: []
                                }
                            ]
                        },
                    ]
                });
                investmentsArray.push(records.toJSON());
            }
            return investmentsArray;
        } catch (error) {
            throw new Error("Error getting Due investments", error);
        }
    }
    static async createRemittanceProcess(investmentList, year, month, period) {
        try {
            for (const investment of investmentList) {
                const processCalendarId = await ProcessCalendar.findOne({
                    where: {
                        [Op.and]: {
                            year: {
                                [Op.eq]: {
                                    year
                                }
                            },
                            month: {
                                [Op.eq]: {
                                    month
                                }
                            },
                            period: {
                                [Op.eq]: {
                                    period
                                }
                            }
                        }
                    },
                    attributes: ['id']
                });
                const remittanceProcess = await RemittanceProcess.create({
                    process_calendar_id: processCalendarId.id,
                    process_date: new Date(),
                    remittance_process_status: '8bd47683-611f-4405-b1a8-ce1b04bd05fd',
                });
                for (const investmentDetail of investment) {
                    await RemittanceProcessDetail.create(
                        {
                            remittance_process_id: remittanceProcess.id,
                            process_calendar_id: processCalendarId.id,
                            customer_id: investmentDetail.customer_id,
                            investment_id: investmentDetail.investment_id,
                            receipt_detail_id: investmentDetail.receipt_detail_id ? investmentDetail.receipt_detail_id : null,
                            receipt_type_id: investmentDetail.receipt_type_id ? investmentDetail.receipt_type_id : null,
                            receipt_collection_id: investmentDetail.receipt_collection_id ? investmentDetail.receipt_collection_id : null,
                            remittance_amount: investmentDetail.remittance_amount ? investmentDetail.remittance_amount : null,
                            no_of_installments: investmentDetail.no_of_installments ? investmentDetail.no_of_installments : null,
                            record_identifier: 'a4e3b116-8466-44c6-9e5b-c1ea59d0c159',
                            cheque_number: investmentDetail.cheque_number ? investmentDetail.cheque_number : null,
                            investment_acc_number: investmentDetail.investment_acc_number ? investmentDetail.investment_acc_number : null,
                            bank_name: investmentDetail.bank_name ? investmentDetail.bank_name : null,
                            sb_acc_number: investmentDetail.sb_acc_number ? investmentDetail.sb_acc_number : null,
                        }
                    );
                }
            }
        } catch (error) {
            console.log('error :171', error);
            throw new Error("Error in creating Remittance Process Detail", error);
        }

    }
}