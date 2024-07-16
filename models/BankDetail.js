import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
class BankDetail extends Model { }

BankDetail.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:uuidv4,
            allowNull: false,
        },
        bank_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'BankDetail',
    }
);

export default BankDetail;
