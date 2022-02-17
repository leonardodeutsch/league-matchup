import React from "react";
import axios from 'axios';
import moment from 'moment';
import mastery7 from '../../dist/resources/masterylvl7.png';
import mastery6 from '../../dist/resources/masterylvl6.png';
import mastery5 from '../../dist/resources/masterylvl5.png';
import mastery4 from '../../dist/resources/masterylvl4.png';

class CommentsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  checkMastery(level) {
    if (level === 7) {
      return mastery7;
    }
    if (level === 6) {
      return mastery6;
    }
    if (level === 5) {
      return mastery5;
    }
    if (level === 4) {
      return mastery4;
    }
    if (level < 4) {
      return '';
    }
  }


  render() {
    return(
      <div className="CommentContainer">
        <img className="SummonerIcon" src={`https://lolg-cdn.porofessor.gg/img/d/summonerIcons/12.2/64/${this.props.comment.icon}.png`} />
        <div className="CommentTextContainer">
          <div className="CommentHeader">
            <div className="CommentName">{this.props.comment.name}</div>
            <img src={this.checkMastery(this.props.comment.championLevel)} className="ChampionMastery" />
            <div className="ChampionPoints">{this.numberWithCommas(this.props.comment.championPoints)} pts</div>
            <div className="CommentTime">{moment(this.props.comment.createdAt).startOf('second').fromNow()}</div>
          </div>
          <div className="CommentText">{this.props.comment.comment}</div>
        </div>
      </div>
    );
  }
}

export default CommentsEntry;