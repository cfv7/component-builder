import React from 'react';
import ReactDOM from 'react-dom';
import PlayerSearch from './components/player-search';
import './index.css';

let playerData = 
[{
  name: 'Alexis Sanchez',
  age: 28, 
  position: 'Forward',
  club: 'Arsenal',
  goalsScored: 20,
  value: 1000000,
},
{
  name: 'Mesut Özil',
  age: 28,
  position: 'Midfielder',
  club: 'Arsenal',
  goalsScored: 10,
  value: 10000000 
},
{
  name: 'Eden Hazard',
  age: 26,
  position: 'Winger',
  club: 'Chelsea',
  goalsScored: 15,
  value: 1000
},
{
  name: 'Diego Costa',
  age: 29,
  position: 'Forward',
  club: 'Chelsea',
  goalsScored: 20,
  value: 100
}]

ReactDOM.render(
  <PlayerSearch 
    playerData={
      playerData
    }
  />,
  document.getElementById('root')
);
