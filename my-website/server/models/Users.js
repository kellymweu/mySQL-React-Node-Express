/* CREATE EXPORTS OF FUNCTIONS () FOR THE TABLE Users 
https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
*/

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    Userid: {
      type: DataTypes.INTEGER,
    },
  });
  return Users;
};
