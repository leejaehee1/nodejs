module.exports = (sequelize, DataTypes) => {
    return sequelize.define('punchLoc', {
            drawingNo: {
                type: DataTypes.CHAR(30),
                primaryKey: true
            },
            punchID: {
                type: DataTypes.CHAR(24),
                primaryKey: true
            },
            xPixel: {
                type: DataTypes.INTEGER
            },
            yPixel: {
                type: DataTypes.INTEGER
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "punchLoc"
        });
};