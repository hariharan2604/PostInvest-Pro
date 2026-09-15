import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";
import { v7 as uuidv7 } from "uuid";

class ReceiptCollection extends Model {}

ReceiptCollection.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv7,
      primaryKey: true,
      allowNull: false,
    },
    receipt_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    receipt_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    receipt_amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    chq_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cheque_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    bank_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    instrument_class_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    sb_acc_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "ReceiptCollection",
  },
);

export default ReceiptCollection;
