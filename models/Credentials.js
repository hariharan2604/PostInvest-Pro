import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';
import Agent from './Agent.js';

class Credentials extends Model { }

Credentials.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        agent_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: 'Credentials',
    }
);

Credentials.belongsTo(Agent, { foreignKey: 'agent_id' });

export default Credentials;
