// NOTE: 구조화 참고용 dummy 테이블입니다.
// 공식문서를 참고하여 스키마를 정의하세요
// https://sequelize.org/v5/manual/models-definition.html

module.exports = (sequelize, DataTypes) => {
  const Dummy = sequelize.define(
    'dummy',
    {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Dummy;
};
