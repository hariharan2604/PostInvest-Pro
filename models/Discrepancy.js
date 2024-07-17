import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import ProcessCalendar from './ProcessCalendar.js';
import RemittanceProcess from './RemittanceProcess.js';

class Discrepancy extends Model { }

Discrepancy.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING,
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
        investment_acc_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cheque_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cheque_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        month: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        period: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lot: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        discrepancy_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    },
    {
        sequelize,
        modelName: 'Discrepancy',
    }
);

Discrepancy.belongsTo(ProcessCalendar, { foreignKey: 'process_calendar_id' })
Discrepancy.belongsTo(RemittanceProcess, { foreignKey: 'remittance_process_id' })

export default Discrepancy;
