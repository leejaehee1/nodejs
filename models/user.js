module.exports =(sequelize, DataTypes) => {
    return sequelize.define('user', {
        userID: {
            type: DataTypes.STRING(12),
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING(255),
        },
        userName: {
            type: DataTypes.STRING(30),
        },
        email: {
            type: DataTypes.STRING(30),
        },
        company: {
            type: DataTypes.STRING(30),
        },
        authority: {
            type: DataTypes.STRING(1),
        },
        discipline: {
            type: DataTypes.STRING(1),
        },
        personalID: {
            type: DataTypes.STRING(10),
        },
        department: {
            type: DataTypes.STRING(30),
        },
        nationality: {
            type: DataTypes.STRING(30),
        },
        active: {
            type: DataTypes.STRING(1),
        }
    });
};
