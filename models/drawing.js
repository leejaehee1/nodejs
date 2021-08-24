module.exports = (sequelize, DataTypes) => {
    return sequelize.define('drawing', {
            projectID: {
                type: DataTypes.CHAR(3),
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
            seq: {
                type: DataTypes.TINYINT,
                primaryKey: true
            },
            drawingNo: {
                type: DataTypes.CHAR(30)
            },
            uploadDate: {
                type: DataTypes.DATE
            },
            imagePath: {
                type: DataTypes.STRING(100)
            },
            xSize: {
                type: DataTypes.INTEGER
            },
            ySize: {
                type: DataTypes.INTEGER
            },

        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "drawing"
        });
};