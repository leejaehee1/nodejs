module.exports = (sequelize, DataTypes) => {
    return sequelize.define('punchlist', {
            projectID: {
                type: DataTypes.CHAR(3),
                primaryKey: true
            },
            punchID: {
                type: DataTypes.CHAR(24),
                primaryKey: true
            },
            category: {
                type: DataTypes.CHAR(2),
                foreignKey: true
            },
            systemID: {
                type: DataTypes.CHAR(4),
                foreignKey: true
            },
            subsystem: {
                type: DataTypes.CHAR(6),
                foreignKey: true
            },
            discipline: {
                type: DataTypes.CHAR(1)
            },
            status: {
                type: DataTypes.CHAR(1)
            },
            unit: {
                type: DataTypes.STRING(20)
            },
            area: {
                type: DataTypes.STRING(20)
            },
            tagNumber: {
                type: DataTypes.STRING(30)
            },
            bulkItem: {
                type: DataTypes.CHAR(1)
            },
            bulkName: {
                type: DataTypes.STRING(200)
            },
            department: {
                type: DataTypes.CHAR(3)
            },
            targetDate: {
                type: DataTypes.DATE
            },
            issuedDate: {
                type: DataTypes.DATE
            },
            issuedBy: {
                type: DataTypes.CHAR(12)
            },
            raisedBy: {
                type: DataTypes.CHAR(12)
            },
            completedDate: {
                type: DataTypes.DATE
            },
            completedBy: {
                type: DataTypes.CHAR(12)
            },
            confirmedDate: {
                type: DataTypes.DATE
            },
            confirmedBy: {
                type: DataTypes.CHAR(12)
            },
            closedDate: {
                type: DataTypes.DATE
            },
            closedBy: {
                type: DataTypes.CHAR(12)
            },
            scheduleKey: {
                type: DataTypes.STRING(20)
            },
            scheStartDate: {
                type: DataTypes.DATE
            },
            scheFinishDate: {
                type: DataTypes.DATE
            },
            designChgReq: {
                type: DataTypes.CHAR(1)
            },
            materialReq: {
                type: DataTypes.CHAR(1)
            },
            issueDescription: {
                type: DataTypes.STRING(500)
            },
            completeComment: {
                type: DataTypes.STRING(500)
            },
            notAcceptComment: {
                type: DataTypes.STRING(500)
            },
            difficulty: {
                type: DataTypes.TINYINT
            },
            scheduleImpact: {
                type: DataTypes.TINYINT
            },
            costImpact: {
                type: DataTypes.TINYINT
            },
            keyword1: {
                type: DataTypes.STRING(30)
            },
            keyword2: {
                type: DataTypes.STRING(30)
            },
            keyword3: {
                type: DataTypes.STRING(30)
            },
            keyword4: {
                type: DataTypes.STRING(30)
            },
            drawingNo: {
                type: DataTypes.STRING(30)
            },
            awpCode: {
                type: DataTypes.STRING(50)
            },
            custom1: {
                type: DataTypes.STRING(200)
            },
            custom2: {
                type: DataTypes.STRING(200)
            },
            custom3: {
                type: DataTypes.STRING(200)
            },
            custom4: {
                type: DataTypes.STRING(200)
            },
            custom5: {
                type: DataTypes.STRING(200)
            },
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "punchlist"
        });
};