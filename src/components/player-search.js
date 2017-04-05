import React from 'react';
import PlayerList from './player-list';
import SearchInput from './search-input';
import PositionInput from './position-input';

// sorting, very similar logic to filter w/ different data source
// search by player.query
// drop-down menus are next step
// regex101
// [0-9/\W.,]
// (this.state.forward || this.state.midfield)


export default class PlayerSearch extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
      nameSearch: '',
      positionSearch: ''
    }
  }
  set(field, val) {
    let input = {};
    input[field] = val;
    this.setState(input);
  }
  render() {
    const filteredPlayers = this.props.Arsenal.players.filter((player) => player.name.toLowerCase().includes(this.state.nameSearch.toLowerCase()))
    const filteredPositions = filteredPlayers.filter((player) => player.position.toLowerCase().includes(this.state.positionSearch.toLowerCase()))
    return(
      <div>
        <SearchInput playerName={(val) => this.set('nameSearch', val)}/>
        <PositionInput positions={(val) => this.set('positionSearch', val)}/>
        <PlayerList playerData={filteredPositions}/>
      </div>
    )
  }
}
