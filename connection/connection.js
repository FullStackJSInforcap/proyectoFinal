const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    username: 'u1neba9i1c8cu5',
    password: 'pade4c06176020db8fcbb5460fafdfb59afd874da6019c5751153ff72bb5d05c4',
    host: 'c3cj4hehegopde.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'db5drbiquadh3t',
    dialect: 'postgres'
  });

module.exports = sequelize;