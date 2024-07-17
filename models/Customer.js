import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import Agent from './Agent.js';
// import CustomerRelationship from './CustomerRelationShip.js';
class Customer extends Model { }

Customer.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        cif: {
            type: DataTypes.STRING,
            allowNull: true,
            unique:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        agent_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: 'Customer',
    }
);

Customer.belongsTo(Agent, { foreignKey: 'agent_id' });

// Customer.belongsToMany(Customer, {
//     through: CustomerRelationship,
//     foreignKey: 'customerId',
//     as: 'relatedCustomers',
//     otherKey: 'relatedCustomerId',
// });

export default Customer;
