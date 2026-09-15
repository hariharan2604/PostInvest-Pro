import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";
import { v7 as uuidv7 } from "uuid";

class ReceiptDetail extends Model {}

ReceiptDetail.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv7,
      primaryKey: true,
      allowNull: false,
    },
    investment_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    receipt_collection_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    remittance_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    no_of_installments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receipt_validity: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ReceiptDetail",
  },
);

export default ReceiptDetail;
