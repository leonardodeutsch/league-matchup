const express = require('express')
const {getComments, postComments} = require('../database');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.send('test')
// });

app.get('/comments', (req, res) => {
  console.log(req.query);
  return getComments(req.query.championId, req.query.enemyId)
  .then(comments => {
    res.send(comments);
  })
  .catch(err => {
    res.send(err);
  })
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  return postComments(req.body)
  .then(comment => {
    res.send('comment posted');
  })
  .catch(err => {
    res.send(err);
  })
});

module.exports = app;