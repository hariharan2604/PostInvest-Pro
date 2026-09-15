import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";
import { v7 as uuidv7 } from "uuid";

class InvestmentDetail extends Model {}

InvestmentDetail.init(
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
    installment_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    no_of_installment: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    remittance_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "InvestmentDetail",
  },
);

export default InvestmentDetail;
