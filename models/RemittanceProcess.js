import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import RemittanceProcessStatus from './RemittanceProcessStatus.js';
import ProcessCalendar from './ProcessCalendar.js';

class RemittanceProcess extends Model { }

RemittanceProcess.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        process_calendar_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        lot: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        process_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        remitted_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        remittance_process_status: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        dc_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
    {
        sequelize,
        modelName: 'RemittanceProcess',
    }
);

RemittanceProcess.belongsTo(RemittanceProcessStatus, { foreignKey: 'remittance_process_status' });
RemittanceProcess.belongsTo(ProcessCalendar, { foreignKey: 'process_calendar_id' });

export default RemittanceProcess;
