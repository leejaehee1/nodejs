module.exports = (sequelize, DataTypes) => {
    return sequelize.define('status', {
            status: {
                type: DataTypes.CHAR(1),
                primaryKey: true
            },
            statusName: {
                type: DataTypes.STRING(30)
            },
            shortName: {
                type: DataTypes.STRING(20)
            },
            authority: {
                type: DataTypes.CHAR(1)
            },
            remarks: {
                type: DataTypes.STRING(60)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "status"
        });
};