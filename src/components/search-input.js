import React from 'react';

export default function SearchInput(props) {
  return(
    <div className="search-box">
    <h1> Arsenal Player Search Engine </h1>
    <input type='search' name='search' placeholder='Player Name' 
      onChange={e => props.playerName(e.target.value)}
    /> 
    </div>
  )
} 