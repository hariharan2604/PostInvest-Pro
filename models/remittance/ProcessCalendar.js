import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection.js";
import { v7 as uuidv7 } from "uuid";

class ProcessCalendar extends Model {}

ProcessCalendar.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv7,
      primaryKey: true,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProcessCalendar",
  },
);

export default ProcessCalendar;
