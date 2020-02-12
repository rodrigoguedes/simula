import Sequelize, { Model } from 'sequelize';

class Option extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        correct: Sequelize.BOOLEAN,
        order: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'question_id', as: 'question' });
  }
}

export default Option;
