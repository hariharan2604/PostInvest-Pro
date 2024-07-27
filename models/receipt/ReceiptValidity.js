import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connection.js';
import { v4 as uuidv4 } from 'uuid'
class ReceiptValidity extends Model { }

ReceiptValidity.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'ReceiptValidity',
    }
);

export default ReceiptValidity;
