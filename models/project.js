module.exports = (sequelize, DataTypes) => {
    return sequelize.define('project', {
            projectID: {
                type: DataTypes.CHAR(3),
                primaryKey: true
            },
            projectName: {
                type: DataTypes.STRING(30),
                primaryKey: true
            },
            startDate: {
                type: DataTypes.DATE
            },
            endDate: {
                type: DataTypes.DATE
            },
            activated: {
                type: DataTypes.CHAR(1)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "project"
        });
};