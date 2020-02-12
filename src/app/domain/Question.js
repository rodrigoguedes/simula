import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        type: Sequelize.NUMBER,
        description: Sequelize.STRING,
        answer: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'audio_id', as: 'audio' });
    this.belongsTo(models.Set, { foreignKey: 'set_id', as: 'set' });
  }
}

export default Question;
