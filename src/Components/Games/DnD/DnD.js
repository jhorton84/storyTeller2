import React, { Component } from 'react';
import gameApi from '../../../gamesApi/gamesApi.json';
import '../games.css';

function DnD() {
  const gameInfo = gameApi.game.DnD.campaigns;
  console.log('gameInfo', gameInfo);

  const games = gameInfo.map(e => {
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
    <div className="DnD-component">
      <div className="DnD">{games}</div>
    </div>
  );
}

export default DnD;
