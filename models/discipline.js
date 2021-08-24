module.exports = (sequelize, DataTypes) => {
    return sequelize.define('discipline', {
            discipline: {
                type: DataTypes.CHAR(1),
                primaryKey: true
            },
            disciplineName: {
                type: DataTypes.STRING(24)
            },
            shortName: {
                type: DataTypes.STRING(10)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "discipline"
        });
};