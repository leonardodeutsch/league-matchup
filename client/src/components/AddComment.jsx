import React from "react";
import axios from 'axios';
import API_KEY from '../../../config.js'

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: ''
    }

    this.handleName = this.handleName.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e) {
    this.setState({name: e.target.value});
  }

  handleComment(e) {
    this.setState({comment: e.target.value});
  }

  handleSubmit(e) {
    if (!this.state.comment || !this.state.name || this.state.name.length > 17 || this.state.comment.length > 250) return
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.name}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res);
      let comment = {
        championId: this.props.champion,
        enemyId: this.props.enemy,
        name: this.state.name,
        comment: this.state.comment,
        icon: res.data.profileIconId,
        summonerId: res.data.id
      }
      axios.get(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${comment.summonerId}/by-champion/${comment.championId}?api_key=${API_KEY}`)
      .then(res => {
        comment.championLevel = res.data.championLevel;
        comment.championPoints = res.data.championPoints;
        axios.post('http://localhost:3000/comments', comment)
        .then(res => {
          console.log(res);
          this.props.update();
        })
        .catch(err => {
          console.log(err);
        })
      })
      .catch(err => {
        console.log(err);
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return(
      <div className="AddCommentContainer">
        <input className="username" type="text" placeholder="Summoner Name" onChange={this.handleName} />
        <textarea className="comment" placeholder="Comment on this matchup" name="comment" onChange={this.handleComment} />
        <div className="CommentCounter" style={{color: this.state.comment.length > 250 ? 'red' : 'black'}}>{this.state.comment.length}/250</div>
        <div className="AddComment" onClick={this.handleSubmit}>Comment</div>
      </div>
    );
  }
}

export default AddComment;