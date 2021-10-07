module.exports = (sequelize, DataTypes) => {
    return sequelize.define('progress', {
            projectID: {
                type: DataTypes.CHAR(3),
                primaryKey: true
            },
            predDate: {
                type: DataTypes.DATE,
                primaryKey: true
            },
            RemainYday: {
                type: DataTypes.TINYINT
            },
            IssuedYday: {
                type: DataTypes.TINYINT
            },
            IssuedToday: {
                type: DataTypes.TINYINT
            },
            IssuedTotal: {
                type: DataTypes.TINYINT
            },
            ClosedYday: {
                type: DataTypes.TINYINT
            },
            ClosedToday: {
                type: DataTypes.TINYINT
            },
            ClosedTotal: {
                type: DataTypes.TINYINT
            },
            RemainToday: {
                type: DataTypes.TINYINT
            },
            Pending: {
                type: DataTypes.TINYINT
            },
            trendIssued: {
                type: DataTypes.DECIMAL(5,2)
            },
            trendCompleted: {
                type: DataTypes.DECIMAL(5,2)
            },
            trendClosed: {
                type: DataTypes.DECIMAL(5,2)
            },
            predict: {
                type: DataTypes.STRING(20)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "progress"
        });
};
