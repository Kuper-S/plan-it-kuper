'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    eventId: DataTypes.STRING,
    type: DataTypes.STRING,
    eventName: DataTypes.STRING,
    startDate: DataTypes.STRING,
    startHour: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
    tableName:'Events',
    timestamps: false
  });
  return Event;
};