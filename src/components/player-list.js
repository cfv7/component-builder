import React from 'react';

export default function PlayerList(props) {
  const playerData = props.playerData.map((object, index) => 
  <li key={index}><p><strong>{object.name}</strong> - Arsenal - {object.position} - {object.nationality} - {object.marketValue} y/o</p></li>)
  return (
    <ul> {playerData}</ul>
  )
} 