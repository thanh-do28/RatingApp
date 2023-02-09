const db = require("../database/models/index");

module.exports.createComment = async (req, res) => {
  try {
    const commentDetails = await db.models.Comment.create({
      ...req.body,
    });

    res.status(200).send({
      status: 200,
      message: "Success",
      data: commentDetails,
    });
  } catch (error) {
    // console.log(error.errors[0].message);
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getAllComment = async (req, res) => {
  try {
    const comment = await db.models.Comment.findAll({
      order: [["id", "DESC"]],
    });
    res.status(200).send({
      status: 200,
      message: "Success",
      data: comment,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getCommentById = async (req, res) => {
  try {
    const comment = await db.models.Comment.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      status: 200,
      data: comment,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.updateComment = async (req, res) => {
  try {
    const comment = await db.models.Comment.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (comment) {
      comment.Total = req.body.Total;
      comment.Content = req.body.Content;
      comment.Like = req.body.Like;
      comment.Dislike = req.body.Dislike;
      comment.Status = req.body.Status;
      comment.Clap = req.body.Clap;
      await comment.save();
    }
    res.status(200).send({
      status: 200,
      message: "Success",
      data: comment,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.deleteComment = async (req, res) => {
  try {
    const comment = await db.models.Comment.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (comment) {
      await comment.destroy();
    }
    res.status(200).send({
      status: 200,
      message: "Delete oke",
      data: comment,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};
// module.exports.deleteComment = async (req, res) => {
//   try {
//     const comment = await db.models.Comment.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (comment) {
//       await comment.destroy();
//     }
//     res.status(200).send({
//       status: 200,
//       message: "Delete oke",
//     });
//   } catch (error) {
//     return res.status(400).send({
//       message: "Unable to insert data",
//       error: error,
//       status: 400,
//     });
//   }
// };