// CustomerRelationship.js

import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
// import Customer from './Customer.js';

class CustomerRelationship extends Model { }

CustomerRelationship.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        customerId: {
            type: DataTypes.UUID,
            allowNull: false,
            onUpdate: 'CASCADE', // Ensures referential integrity on updates
            onDelete: 'CASCADE', // Ensures referential integrity on deletes
        },
        relatedCustomerId: {
            type: DataTypes.UUID,
            allowNull: false,
            onUpdate: 'CASCADE', // Ensures referential integrity on updates
            onDelete: 'CASCADE', // Ensures referential integrity on deletes
        },
    },
    {
        sequelize,
        modelName: 'CustomerRelationship',
    }
);

export default CustomerRelationship;
