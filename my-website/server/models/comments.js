/* CREATE EXPORTS OF FUNCTIONS () FOR THE TABLE Comments */

module.exports = (sequelize, Datatypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
