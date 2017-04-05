import React from 'react';

export default function PlayerList(props) {
  const playerData = props.playerData.map((object, index) => 
  <li key={index}><p><strong>{object.name}</strong> - {object.club} - {object.position} - {object.age} y/o</p></li>)
  return (
    <ul> {playerData}</ul>
  )
} 