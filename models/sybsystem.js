module.exports = (sequelize, DataTypes) => {
    return sequelize.define('sybsystem', {
            projectID: {
                type: DataTypes.STRING(3),
                primaryKey: true
            },
            punchID: {
                type: DataTypes.STRING(24),
                primaryKey: true
            },

        },
        {
            createdAt: false,
            updatedAt: false,
        });
};