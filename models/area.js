module.exports = (sequelize, DataTypes) => {
    return sequelize.define('area', {
             area: {
                 type: DataTypes.CHAR(4),
                 primaryKey: true
             },
             areaName: {
                 type: DataTypes.STRING(30)
             },
         },
         {
             createdAt: false,
             updatedAt: false,
             tableName: "area"
         });
};