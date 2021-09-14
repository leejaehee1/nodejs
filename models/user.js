module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
            userID: {
                type: DataTypes.CHAR(12),
                primaryKey: true
            },
            password: {
                type: DataTypes.STRING(255)
            },
            userName: {
                type: DataTypes.STRING(30)
            },
            email: {
                type: DataTypes.STRING(30)
            },
            company: {
                type: DataTypes.STRING(30)
            },
            authority: {
                type: DataTypes.CHAR(1)
            },
            personalID: {
                type: DataTypes.CHAR(10)
            },
            department: {
                type: DataTypes.STRING(30)
            },
            active: {
                type: DataTypes.CHAR(1)
            }
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "users"
        });
};
