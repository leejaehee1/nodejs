module.exports = (sequelize, DataTypes) => {
    return sequelize.define('subsystem', {
            subsystem: {
                type: DataTypes.CHAR(6),
                primaryKey: true
            },
            subsystemName: {
                type: DataTypes.STRING(255)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "subsystem"
        });
};