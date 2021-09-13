import React from 'react';
import { NavLink } from 'react-router-dom';
import '../games.css';

function GameList({ gameInfo, game }) {
  console.log('game', game);
  const games = gameInfo.map(e => {
    const { image, title, description } = e.campaign;
    return (
      <div className='card border-bottom'>
        <img src={image} alt='' />
        <div className='card-details'>
          <h1>{title}</h1>
          <p>{description}</p>
          <NavLink exact to={`/character-creation-${game}`}>
            <button>Play "{title}"</button>
          </NavLink>
        </div>
      </div>
    );
  });

  return (
    <div className='list'>
      <div className='GameList'>{games}</div>
    </div>
  );
}

export default GameList;
