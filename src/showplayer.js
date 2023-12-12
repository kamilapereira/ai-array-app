import React from 'react';

const ShowPlayer = ({ player }) => {
  // Assuming a structure similar to DisplayPlayer component
  // This component displays the details of a single player
  return (
    <div className='player-info'>
      <img className='player-image' src={player.img} alt={`${player.firstName} ${player.lastName}`} />
      <h1>{`${player.firstName} ${player.lastName}`}</h1>
      <br /> {/* Line break here */}
      <p><strong>Age:</strong> {player.age}</p>
      <p><strong>Club:</strong> {player.club}</p>
      <p><strong>Trophies:</strong> {player.trophies}</p>
      <p><strong>Nationality:</strong> {player.nationality}</p>
      <br /> {/* Line break here */}
      <p><strong>Bio:</strong> {player.bio}</p>
      
    </div>
  );
};

export default ShowPlayer;
