module.exports = (sequelize, DataTypes) => {
    return sequelize.define('department', {
            department: {
                type: DataTypes.CHAR(3),
                primaryKey: true
            },
            deptName: {
                type: DataTypes.STRING(20)
            },
            shortName: {
                type: DataTypes.STRING(12)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "department"
        });
};