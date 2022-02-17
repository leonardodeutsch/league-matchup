import React from 'react';

const Selection = ({champions, championSelect, enemySelect, matchup, championIndex, enemyIndex}) => {

  let tagColor = (tag) => {
    if (tag === 'Marksman') {
      return 'rgba(203, 118, 14, 0.75)';
    } else if (tag === 'Support') {
      return 'rgba(34, 177, 78, 0.75)';
    } else if (tag === 'Assassin') {
      return 'rgba(59, 13, 110, 0.75)';
    } else if (tag === 'Mage') {
      return 'rgba(9, 33, 120, 0.75)';
    } else if (tag === 'Tank') {
      return 'rgba(173, 85, 195, 0.75)';
    } else if (tag === 'Fighter') {
      return 'rgba(171, 16, 16, 0.75)';
    }
  }
  return (
    <div className="SelectionContainer">
      <div className="TagContainer">
        <div className="ChampionTags">
          {championIndex !== '' && champions[championIndex].tags.map(tag => (
            <div key={tag} className="Tag" style={{background: tagColor(tag)}}>{tag}</div>
          ))}
        </div>
        <div className="EnemyTags">
        {enemyIndex !== '' && champions[enemyIndex].tags.map(tag => (
            <div key={tag} className="Tag" style={{background: tagColor(tag)}}>{tag}</div>
          ))}
        </div>
      </div>
      {championIndex !== '' && <img className="ChampionBanner" src={champions[championIndex].image.full}/>}
      {enemyIndex !== '' && <img className="EnemyBanner" src={champions[enemyIndex].image.full}/>}
      <div className="SelectContainer">
        <select className="championSelected" defaultValue="Select Champion" onChange={championSelect}>
          <option value="Select Champion" disabled hidden>Pick your champion</option>
          {champions.map((champion, i) => (
            <option key={champion.key} value={champion.key} index={i}>{champion.name}</option>
          ))}
        </select>
        <select className="enemySelected" defaultValue="Select Enemy" onChange={enemySelect}>
        <option value="Select Enemy" disabled hidden>Pick your enemy's champion</option>
          {champions.map((champion, i) => (
            <option key={champion.key} value={champion.key} index={i}>{champion.name}</option>
          ))}
        </select>
      </div>
        {championIndex !== '' && enemyIndex !== '' && <div className="MatchButton" onClick={matchup}>Matchup!</div>}
    </div>
  );
}

export default Selection;
