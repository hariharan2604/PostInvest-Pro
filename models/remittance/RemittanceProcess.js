import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";
import { v7 as uuidv7 } from "uuid";

class RemittanceProcess extends Model {}

RemittanceProcess.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv7,
      primaryKey: true,
      allowNull: false,
    },
    process_calendar_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    lot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    process_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    remitted_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    remittance_process_status: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    dc_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "RemittanceProcess",
    hooks: {
      beforeCreate: async (instance) => {
        const lot = await generateCustomId();
        instance.lot = lot;
      },
    },
  },
);
async function generateCustomId() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");

  const latestRecord = await RemittanceProcess.findOne({
    where: {
      lot: {
        [sequelize.Op.like]: `${year}${month}%`,
      },
    },
    order: [["createdAt", "DESC"]],
  });

  let increment = 1;

  if (latestRecord) {
    const latestCustomId = latestRecord.lot;
    const latestIncrement = parseInt(latestCustomId.slice(6), 10);
    increment = latestIncrement + 1;
  }

  const incrementStr = String(increment).padStart(5, "0");
  return `${year}${month}${incrementStr}`;
}

export default RemittanceProcess;
