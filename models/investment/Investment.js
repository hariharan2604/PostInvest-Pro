import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";
import { v7 as uuidv7 } from "uuid";

class Investment extends Model {}

Investment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv7,
      primaryKey: true,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    investment_acc_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scheme_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    investment_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tenure: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    installment_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    investment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    next_installment_due: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Investment",
  },
);

export default Investment;
