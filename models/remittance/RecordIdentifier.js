import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
class RecordIdentifier extends Model { }

RecordIdentifier.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        record_identifier_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'RecordIdentifier',
    }
);

export default RecordIdentifier;
