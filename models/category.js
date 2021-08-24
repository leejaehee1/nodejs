module.exports = (sequelize, DataTypes) => {
    return sequelize.define('category', {
            category: {
                type: DataTypes.CHAR(2),
                primaryKey: true
            },
            categoryName: {
                type: DataTypes.STRING(50)
            },
            stage: {
                type: DataTypes.CHAR(1)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "category"
        });
};