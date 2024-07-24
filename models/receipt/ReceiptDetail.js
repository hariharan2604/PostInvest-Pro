import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connection.js';
import { v4 as uuidv4 } from "uuid"

class ReceiptDetail extends Model { }

ReceiptDetail.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        investment_id: {
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

    },
    {
        sequelize,
        modelName: 'ReceiptDetail',
    }
);

// ReceiptDetail.belongsTo(Investment, { foreignKey: 'investment_id' });
// ReceiptDetail.belongsTo(ReceiptCollection, { foreignKey: 'receipt_collection_id' });

export default ReceiptDetail;
