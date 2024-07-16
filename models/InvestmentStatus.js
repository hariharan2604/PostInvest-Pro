import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';

class InvestmentStatus extends Model { }

InvestmentStatus.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        investment_status_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'InvestmentStatus',
    }
);

export default InvestmentStatus;
