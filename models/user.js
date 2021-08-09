module.exports =(sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        pw: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
    });
};