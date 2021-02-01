import React, { Component } from 'react';
import gameApi from '../../../gamesApi/gamesApi.json';
import GameList from '../GameList/GameList';

function L5R() {
  const gameInfo = gameApi.game.L5R.campaigns;
  console.log('gameInfo L5R', gameInfo);
  return (
    <div className="L5R-component">
      <div className="L5R">
        <GameList gameInfo={gameInfo} />
      </div>
    </div>
  );
}

export default L5R;
