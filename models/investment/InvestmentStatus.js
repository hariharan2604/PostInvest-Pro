import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";
import { v7 as uuidv7 } from "uuid";

class InvestmentStatus extends Model {}

InvestmentStatus.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv7,
      allowNull: false,
    },
    investment_status_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "InvestmentStatus",
  },
);

export default InvestmentStatus;
