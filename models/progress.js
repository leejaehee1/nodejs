module.exports = (sequelize, DataTypes) => {
    return sequelize.define('progress', {
            projectID: {
                type: DataTypes.CHAR(3),
                primaryKey: true
            },
            predDate: {
                type: DataTypes.DATE,
                primaryKey: true
            },
            trend: {
                type: DataTypes.TINYINT
            },
            predict: {
                type: DataTypes.STRING(20)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "progress"
        });
};