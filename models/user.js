module.exports =(sequelize, DataTypes) => {
    return sequelize.define('board', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        contents: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
    });
};