import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connection.js';

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
            onUpdate: 'CASCADE', 
            onDelete: 'CASCADE', 
        },
        relatedCustomerId: {
            type: DataTypes.UUID,
            allowNull: false,
            onUpdate: 'CASCADE', 
            onDelete: 'CASCADE', 
        },
    },
    {
        sequelize,
        modelName: 'CustomerRelationship',
    }
);

export default CustomerRelationship;
