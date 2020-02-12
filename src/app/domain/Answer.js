import Sequelize, { Model } from 'sequelize';

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        answer: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'question_id', as: 'question' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Answer;
