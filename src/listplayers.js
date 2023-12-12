import React, { useState } from 'react';
import arrPlayers from './players'; // Assuming the data is in the "players.js" file
import ShowPlayer from './showplayer'; // Import the ShowPlayer component

const ListPlayers = () => {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [players, setPlayers] = useState(arrPlayers);
  const [showPlayersList, setShowPlayersList] = useState(true);

  const handleShowPlayer = (playerId) => {
    setSelectedPlayerId(playerId);
    setShowPlayersList(false);
  };

  const resetSelectedPlayer = () => {
    setSelectedPlayerId(null);
    setShowPlayersList(true);
  };

  const handleDeleteClick = (playerId) => {
    const updatedPlayers = players.filter((player) => player.id !== playerId);
    setPlayers(updatedPlayers);
    resetSelectedPlayer();
  };

  return (
    <div>
      {showPlayersList ? (
        <div>
          <h1 className='h1'>Top 10 Soccer Players</h1>

          <table className='data-table'>
              {/* Table header */}
              <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Trophies</th>
              <th>Club</th>
              <th>Nationality</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>

            {/* Table body */}
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  {/* Table rows with player details */}
                  <td>{player.id}</td>
                  <td>{`${player.firstName} ${player.lastName} (${player.age})`}</td>
                  <td>{player.trophies}</td>
                  <td>{player.club}</td>
                  <td>{player.nationality}</td>
                  <td><button onClick={() => handleShowPlayer(player.id)}>More...</button></td>
                  <td><button className='delete' onClick={() => handleDeleteClick(player.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div> ) : ( <div>
          <ShowPlayer player={players.find((player) => player.id === selectedPlayerId)} />
          <button className='back-button' onClick={resetSelectedPlayer}>← Back to List</button>
        </div>
      )}
    </div>
  );
};

export default ListPlayers;
