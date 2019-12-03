const ticket = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('ticket', {
    description: {
      type: DataTypes.STRING
    },
    feedback: {
      type: DataTypes.STRING
    },
    statusId: {
      type: DataTypes.INTEGER
    },
    requestId: {
      type: DataTypes.INTEGER
    }
  });

  Ticket.associate = models => {
    Ticket.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
    Ticket.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      as: 'employee'
    });
  };

  return Ticket;
};

export default ticket;
