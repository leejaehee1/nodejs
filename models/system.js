module.exports = (sequelize, DataTypes) => {
    return sequelize.define('systems', {
            systems: {
                type: DataTypes.CHAR(4),
                primaryKey: true
            },
            systemName: {
                type: DataTypes.STRING(100)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "systems"
        });
};