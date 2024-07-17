import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import Customer from './Customer.js';
import SchemeDetail from './SchemeDetail.js';
import InvestmentStatus from './InvestmentStatus.js';
import InvestmentDetail from './InvestmentDetail.js';

class Investment extends Model { }

Investment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        investment_acc_no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        scheme_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        investment_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        tenure: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        installment_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        investment_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        next_installment_due: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: 'Investment',
    }
);

Investment.belongsTo(Customer, { foreignKey: 'customer_id' });
Investment.belongsTo(SchemeDetail, { foreignKey: 'scheme_id' });
Investment.belongsTo(InvestmentStatus, { foreignKey: 'status_id' });

export default Investment;
