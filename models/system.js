module.exports = (sequelize, DataTypes) => {
    return sequelize.define('systems', {
            systemID: {
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
// UL
// Structures for steam. water. gas cycles
