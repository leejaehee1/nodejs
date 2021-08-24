module.exports = (sequelize, DataTypes) => {
    return sequelize.define('scheduleDate', {
            keyID: {
                type: DataTypes.CHAR(20),
                primaryKey: true
            },
            startDate: {
                type: DataTypes.DATE
            },
            finishDate: {
                type: DataTypes.DATE
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "scheduleDate"
        });
};