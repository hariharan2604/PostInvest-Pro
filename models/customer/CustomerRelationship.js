import { DataTypes, Model } from "sequelize";
import sequelize from "../../db/connection.js";

class CustomerRelationship extends Model {}

CustomerRelationship.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.uuidv7,
      primaryKey: true,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    relatedCustomerId: {
      type: DataTypes.UUID,
      allowNull: false,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CustomerRelationship",
  },
);

export default CustomerRelationship;
