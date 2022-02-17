import React from "react";
import axios from 'axios';
import champions from './utilities/champions.js';
import background from '../dist/resources/animated-freljord.mp4';

import Header from './components/Header.jsx';
import Selection from './components/Selection.jsx';
import Comments from './components/Comments.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      championSelected: '',
      championIndex: '',
      enemySelected: '',
      enemyIndex: '',
      comments: ''
    }

    this.handleChampionSelect = this.handleChampionSelect.bind(this);
    this.handleEnemySelect = this.handleEnemySelect.bind(this);
    this.handleMatchup = this.handleMatchup.bind(this);
  }

  handleChampionSelect(e) {
    let index = e.target.options.selectedIndex - 1;
    this.setState({championSelected: e.target.value, championIndex: index});
    console.log(this.state.championSelected, this.state.championIndex);
  }

  handleEnemySelect(e) {
    let index = e.target.options.selectedIndex - 1;
    this.setState({enemySelected: e.target.value, enemyIndex: index});
  }

  handleMatchup(e) {
    if (!this.state.championSelected || !this.state.enemySelected) return
    console.log(this.state.championSelected, this.state.enemySelected);
    axios.get('http://localhost:3000/comments', {
      params: {
        championId: this.state.championSelected,
        enemyId: this.state.enemySelected
      }
    })
    .then(res => {
      console.log(res.data);
      this.setState({comments: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
        <video src={background} className="VideoBackground" muted loop autoPlay/>
        <div className="Overlay" />
        <Header />
        <Selection
          champions={champions}
          championSelect={this.handleChampionSelect}
          championIndex={this.state.championIndex}
          enemySelect={this.handleEnemySelect}
          enemyIndex={this.state.enemyIndex}
          matchup={this.handleMatchup}
        />
        <Comments
          champion={this.state.championSelected}
          enemy={this.state.enemySelected}
          comments={this.state.comments}
          matchup={this.handleMatchup}
        />

      </div>
    );
  }
}

export default App;