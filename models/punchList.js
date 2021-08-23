module.exports = (sequelize, DataTypes) => {
    return sequelize.define('puchList', {
            projectID: {
                type: DataTypes.STRING(3),
                primaryKey: true
            },
            punchID: {
                type: DataTypes.STRING(24),
                primaryKey: true
            },
            category: {
                type: DataTypes.STRING(2),
                foreignKey: true
            },
            system: {
                type: DataTypes.STRING(4),
                foreignKey: true
            },
            subsystem: {
                type: DataTypes.STRING(6),
                foreignKey: true
            },
            discipline: {
                type: DataTypes.STRING(1)
            },
            status: {
                type: DataTypes.STRING(1)
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
                type: DataTypes.STRING(1)
            },
            bulkName: {
                type: DataTypes.STRING(200)
            },
            department: {
                type: DataTypes.STRING(3)
            },
            targetDate: {
                type: DataTypes.DATE
            },
            issuedDate: {
                type: DataTypes.DATE
            },
            issuedBy: {
                type: DataTypes.STRING(12)
            },
            raisedBy: {
                type: DataTypes.STRING(12)
            },
            completeDate: {
                type: DataTypes.DATE
            },
            completedBy: {
                type: DataTypes.STRING(12)
            },
            confirmedDate: {
                type: DataTypes.DATE
            },
            confirmedBy: {
                type: DataTypes.STRING(12)
            },
            closedDate: {
                type: DataTypes.DATE
            },
            closedBy: {
                type: DataTypes.STRING(12)
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
                type: DataTypes.STRING(1)
            },
            meterialReq: {
                type: DataTypes.STRING(1)
            },
            issueDescription: {
                type: DataTypes.STRING(1)
            },
            completeComment: {
                type: DataTypes.STRING(1)
            },
            notAcceptComment: {
                type: DataTypes.STRING(1)
            },
            difficulty: {
                type: DataTypes.TINYINT,
            },
            scheduleImpact: {
                type: DataTypes.TINYINT,
            },
            costImpact: {
                type: DataTypes.TINYINT,
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
        });
};