import Sequelize, { Model } from 'sequelize';

class AnswerOption extends Model {
  static init(sequelize) {
    super.init(
      {
        order: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Option, { foreignKey: 'option_id', as: 'option' });
  }
}

export default AnswerOption;
