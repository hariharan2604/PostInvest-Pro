import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import Investment from './Investment.js';

class InvestmentDetail extends Model { }

InvestmentDetail.init(
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
        installment_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        no_of_installment: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        remittance_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: 'InvestmentDetail',
    }
);

InvestmentDetail.belongsTo(Investment, { foreignKey: 'investment_id' });
export default InvestmentDetail;
