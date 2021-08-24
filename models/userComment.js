module.exports = (sequelize, DataTypes) => {
    return sequelize.define('userComment', {
            punchID: {
                type: DataTypes.STRING(3),
                primaryKey: true
            },
            seq: {
                type: DataTypes.TINYINT,
                primaryKey: true
            },
            writtenDate: {
                type: DataTypes.DATE
            },
            userID: {
                type: DataTypes.CHAR(12)
            },
            comments: {
                type: DataTypes.STRING(100)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "userComment"
        });
};