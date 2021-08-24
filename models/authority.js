module.exports = (sequelize, DataTypes) => {
    return sequelize.define('authority', {
            authority: {
                type: DataTypes.CHAR(1),
                primaryKey: true
            },
            authName: {
                type: DataTypes.STRING(20)
            },
            remarks: {
                type: DataTypes.STRING(20)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "authority"
        });
};