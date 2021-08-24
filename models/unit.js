module.exports = (sequelize, DataTypes) => {
    return sequelize.define('unit', {
            unit: {
                type: DataTypes.CHAR(4),
                primaryKey: true
            },
            unitName: {
                type: DataTypes.STRING(30)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "unit"
        });
};