import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';

class SchemeDetail extends Model { }

SchemeDetail.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue:uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        scheme_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        scheme_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'SchemeDetail',
    }
);

export default SchemeDetail;
