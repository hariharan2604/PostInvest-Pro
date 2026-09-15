import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";
import { v7 as uuidv7 } from "uuid";
class ReceiptValidity extends Model {}

ReceiptValidity.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv7,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ReceiptValidity",
  },
);

export default ReceiptValidity;
