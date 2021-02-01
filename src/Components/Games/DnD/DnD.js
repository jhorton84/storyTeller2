import React, { Component } from 'react';
import gameApi from '../../../gamesApi/gamesApi.json';
import GameList from '../GameList/GameList';

function DnD() {
  const gameInfo = gameApi.game.DnD.campaigns;
  console.log('gameInfo DnD', gameInfo);
  return (
    <div className="DnD-component">
      <div className="DnD">
        <GameList gameInfo={gameInfo} />
      </div>
    </div>
  );
}

export default DnD;
