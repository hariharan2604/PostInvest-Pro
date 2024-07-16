import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';

class BankDetail extends Model { }

BankDetail.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        bank_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'BankDetail',
    }
);

export default BankDetail;
