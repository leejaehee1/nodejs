module.exports = (sequelize, DataTypes) => {
    return sequelize.define('vwpunchhis', {
            projectID: {
                type: DataTypes.CHAR(3),
                primaryKey: true
            },
            punchID: {
                type: DataTypes.CHAR(34),
                primaryKey: true
            },
            status: {
                type: DataTypes.STRING(1),
            },
            statusName: {
                type: DataTypes.STRING(19),
            },
            createdBy: {
                type: DataTypes.STRING(30),
            },
            createdDate: {
                type: DataTypes.STRING(19),
            },
            description: {
                type: DataTypes.STRING(46),
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "vwpunchhis"
        });
};