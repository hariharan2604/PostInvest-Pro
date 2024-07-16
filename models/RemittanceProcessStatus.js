import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
class RemittanceProcessStatus extends Model { }

RemittanceProcessStatus.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue:uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        remittance_process_status_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'RemittanceProcessStatus',
    }
);

export default RemittanceProcessStatus;
