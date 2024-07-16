import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import RemittanceProcess from './RemittanceProcess.js';
import Customer from './Customer.js';
import Investment from './Investment.js';
import ReceiptDetail from './ReceiptDetail.js';
import ReceiptCollection from './ReceiptCollection.js';
import ProcessCalendar from './ProcessCalendar.js';
import ReceiptType from './ReceiptType.js';
class RemittanceProcessDetail extends Model { }

RemittanceProcessDetail.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        remittance_process_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        process_calendar_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        investment_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        receipt_detail_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        receipt_type_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        receipt_collection_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        remittance_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        no_of_installments: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        record_identifier: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cheque_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        investment_acc_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bank_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sb_acc_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'RemittanceProcessDetail',
    }
);

RemittanceProcessDetail.belongsTo(RemittanceProcess, { foreignKey: 'remittance_process_id' })
RemittanceProcessDetail.belongsTo(Customer, { foreignKey: 'customer_id' })
RemittanceProcessDetail.belongsTo(Investment, { foreignKey: 'investment_id' })
RemittanceProcessDetail.belongsTo(ReceiptDetail, { foreignKey: 'receipt_detail_id' })
RemittanceProcessDetail.belongsTo(ReceiptCollection, { foreignKey: 'receipt_collection_id' })
RemittanceProcessDetail.belongsTo(ProcessCalendar, { foreignKey: 'process_calendar_id' })
RemittanceProcessDetail.belongsTo(ReceiptType, { foreignKey: 'receipt_type_id' })

export default RemittanceProcessDetail;
