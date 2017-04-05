import React from 'react'

export default function PositionInput(props) {
  return(
    <fieldset className="radio-box">
      <legend>Filter by position</legend>
      <input onClick={(e) => props.positions(e.target.value)} type="radio" name="action" id="track" value="" /><label for="">All</label><br />
      <input onClick={(e) => props.positions(e.target.value)} type="radio" name="action" id="track" value="Keeper" /><label for="Keeper" className="Keeper">Keeper</label><br />
      <input onClick={(e) => props.positions(e.target.value)} type="radio" name="action" id="track" value="Back" /><label for="Back" className="Back">Defense</label><br />
      <input onClick={(e) => props.positions(e.target.value)} type="radio" name="action" id="track" value="Midfield" /><label for="Midfield" className="Midfield">Midfield</label><br />
      <input onClick={(e) => props.positions(e.target.value)} type="radio" name="action" id="track" value="Wing" /><label for="Wing" className="Wing">Wings</label><br />
       <input onClick={(e) => props.positions(e.target.value)} type="radio" name="action" id="track" value={("Forward") || ("Striker")} /><label for="Forward" className="Forward">Forwards</label><br />
    </fieldset>
  )
}