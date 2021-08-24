module.exports = (sequelize, DataTypes) => {
    return sequelize.define('projectUser', {
            projectID: {
                type: DataTypes.CHAR(3),
                primaryKey: true
            },
            userID: {
                type: DataTypes.CHAR(12),
                primaryKey: true
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "projectUser"
        });
};