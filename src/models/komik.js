module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define('Komik', {
    id: { type: DataTypes.INTEGER, allowIncement: true, primaryKey: true },
    judul: { type: DataTypes.STRING,},
    description: { type: DataTypes.STRING,},
    author: { type: DataTypes.STRING,}
  });
  return Komik;
};