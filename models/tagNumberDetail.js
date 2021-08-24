module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tagNumberDetail', {
            tagNumber: {
                type: DataTypes.STRING(30),
                primaryKey: true
            },
            system: {
                type: DataTypes.CHAR(4),
                primaryKey: true
            },
            subsystem: {
                type: DataTypes.CHAR(4),
                primaryKey: true
            },
            unit: {
                type: DataTypes.STRING(20)
            },
            area: {
                type: DataTypes.STRING(20)
            },
            discipline: {
                type: DataTypes.CHAR(1)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "tagNumberDetail"
        });
};