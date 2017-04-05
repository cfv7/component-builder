import React from 'react';

export default function PlayerList(props) {
  function reactClasses(position){
    return `card ${position}`
  }
  const playerData = props.playerData.map((object, index) => 
  <li key={index} className={reactClasses(object.position)} ><p><strong>{object.name}</strong> - {object.position} - {object.nationality} - {object.marketValue}</p></li>)
  return (
    <ol className="background"> {playerData}</ol>
  )
} 