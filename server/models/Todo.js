// TODO: visitor 모델(-> 테이블 구조) 정의
const Todo = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'todo', // param1: 모델(테이블) 이름 설정
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    }, // param2: 컬럼 정의
    {
      tableName: 'todo', // 실제 DB 테이블 이름
      freezeTableName: true,
      timestamps: false,
    }, // 인자3: 모델의 옵션 정의
  );

  return model;
};

module.exports = Todo;
