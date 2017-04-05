import React from 'react';
import PlayerList from './player-list';
import SearchInput from './search-input';

// sorting, very similar logic to filter w/ different data source
// search by player.query
// drop-down menus are next step
// regex101



export default class PlayerSearch extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
      nameSearch: ''
    }
  }
  set(field, val) {
    let input = {};
    input[field] = val;
    this.setState(input);
  }
  render() {
    const filteredPlayers = this.props.playerData.filter((player) => player.name.toLowerCase().includes(this.state.nameSearch.toLowerCase()))
    return(
      <div>
        <SearchInput playerName={(val) => this.set('nameSearch', val)}/>
        <PlayerList playerData={filteredPlayers}/>
      </div>
    )
  }
}
