import { useState } from "react";

export default function Player({ initalName, symbol }) {
  
  const [playerName, setPlayerName] =useState(initalName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); //React docs says do not use setIsEditing(!isEditing); Because of sheduling state issues
  }
  function handleChange(event){
      setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange} /> );
    //btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'} </button>
    </li>
  );
}
