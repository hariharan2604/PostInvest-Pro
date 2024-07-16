import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import RemittanceProcess from './RemittanceProcess.js';
import ProcessCalendar from './ProcessCalendar.js';
import ReceiptType from './ReceiptType.js';

class RemittanceSubmitted extends Model { }

RemittanceSubmitted.init(
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
        receipt_type_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        no_of_installments: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        remitted_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        cheque_number: {
            type: DataTypes.STRING,
            allowNull: false,
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
        modelName: 'RemittanceSubmitted',
    }
);

RemittanceSubmitted.belongsTo(RemittanceProcess, { foreignKey:'remittance_process_id'})
RemittanceSubmitted.belongsTo(ProcessCalendar, { foreignKey:'process_calendar_id'})
RemittanceSubmitted.belongsTo(ReceiptType, { foreignKey:'receipt_type_id'})

export default RemittanceSubmitted;
