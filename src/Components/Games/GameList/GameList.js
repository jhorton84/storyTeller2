import React, { Component } from 'react';
// import gameApi from '../../../gamesApi/gamesApi.json';
import '../games.css';

function GameList(gameInfo) {
  const games = gameInfo.gameInfo.map(e => {
    const { image, title, description } = e.campaign;
    return (
      <div className="card">
        <img src={image} />
        <div className="card-details">
          <h1>{title}</h1>
          <p>{description}</p>
          <button>Play "{title}"</button>
        </div>
      </div>
    );
  });

  return (
    <div className="GameList-component">
      <div className="GameList">{games}</div>
    </div>
  );
}

export default GameList;
