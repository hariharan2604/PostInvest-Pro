import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import ReceiptType from './ReceiptType.js';

class ReceiptCollection extends Model { }

ReceiptCollection.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        receipt_type_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        receipt_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        receipt_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        chq_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cheque_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        bank_id: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        instrument_class: {
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
        modelName: 'ReceiptCollection',
    }
);

ReceiptCollection.belongsTo(Customer, { foreignKey: 'customer_id' });
ReceiptCollection.belongsTo(BankDetail, { foreignKey: 'bank_id' });
ReceiptCollection.belongsTo(ReceiptType, { foreignKey: 'receipt_type_id' });

export default ReceiptCollection;
