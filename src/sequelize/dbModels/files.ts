import sequelize from "../sequelize";
import { Model, DataTypes, UUIDV4, UUIDV1 } from "sequelize";

class File extends Model {}

File.init(
  {
    fileId: {
      type: DataTypes.STRING,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: "fileId",
    },
    uid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fieldname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    originalname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ext: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    flag: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    public: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: "files",
    timestamps: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_unicode_ci",
  }
);

File.sync({ force: false, alter: true });
// File.hasMany(RolePermissionModel, {
//   foreignKey: "roleCode",
//   as: "permissions",
// });

export default File;
