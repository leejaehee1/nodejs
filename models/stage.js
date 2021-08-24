module.exports = (sequelize, DataTypes) => {
    return sequelize.define('stage', {
            stage: {
                type: DataTypes.CHAR(1),
                primaryKey: true
            },
            stageName: {
                type: DataTypes.STRING(20)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "stage"
        });
};