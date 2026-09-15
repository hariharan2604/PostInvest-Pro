import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";
import { v7 as uuidv7 } from "uuid";
class InstrumentClass extends Model {}

InstrumentClass.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv7,
      primaryKey: true,
      allowNull: false,
    },
    instrument_class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "InstrumentClass",
  },
);

export default InstrumentClass;
