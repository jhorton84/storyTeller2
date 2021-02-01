import React, { Component } from 'react';
// import gameApi from '../../../gamesApi/gamesApi.json';
import '../games.css';

function GameList(gameInfo) {
  console.log('gameInfo GameList', gameInfo);
  const games = gameInfo.gameInfo.map(e => {
    const { image, title, description } = e.campaign;
    return (
      <div className="card">
        <img src={image} />
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Play "{title}"</button>
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
