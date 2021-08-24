module.exports = (sequelize, DataTypes) => {
    return sequelize.define('photos', {
            punchID: {
                type: DataTypes.CHAR(24),
                primaryKey: true
            },
            punchStep: {
                type: DataTypes.CHAR(1),
                primaryKey: true
            },
            seq: {
                type: DataTypes.TINYINT,
                primaryKey: true
            },
            localPath: {
                type: DataTypes.STRING(100)
            },
            imagePath: {
                type: DataTypes.STRING(100)
            },
            uploaded: {
                type: DataTypes.CHAR(1)
            },
            uploadDate: {
                type: DataTypes.DATE
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "photos"
        });
};