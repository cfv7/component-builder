import React from 'react';

export default function SearchInput(props) {
  return(
    <input type='search' name='search' placeholder='Player Name' 
      onChange={e => props.playerName(e.target.value)}
    /> 
  )
} 