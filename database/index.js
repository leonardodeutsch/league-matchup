const mongoose = require('mongoose');
const { MongoConnectionString } = require('../mongoconfig.js');

let connectionString = MongoConnectionString;
mongoose.connect(connectionString, () => {
  console.log('Mongoose connected to MongoDB on port 27017');
});

const commentSchema = new mongoose.Schema(
  {
    championId: {type: Number, required: true},
    enemyId: {type: Number, required: true},
    name: {type: String, required: true},
    comment: {type: String, required: true},
    icon: {type: Number, required: true},
    summonerId: {type: String, required: true},
    championLevel: Number,
    championPoints: Number
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model('Comment', commentSchema);

let getComments = (championId, enemyId) => {
  return Comment.find({championId: championId, enemyId: enemyId}).select({__v: 0}).lean()
    .then(comments => {
      return comments;
    })
}

let postComments = (comment) => {
  return Comment.create(comment)
    .then(comment => {
      return comment;
    })
}

module.exports = { getComments, postComments };