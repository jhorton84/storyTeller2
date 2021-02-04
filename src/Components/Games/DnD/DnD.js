import React from 'react';
import gameApi from '../../../gamesApi/gamesApi.json';
import GameList from '../GameList/GameList';

function DnD() {
  const gameInfo = gameApi.game.DnD.campaigns;
  return (
    <div className="DnD-component">
      <div className="DnD">
        <GameList gameInfo={gameInfo} game="DnD" />
      </div>
    </div>
  );
}

export default DnD;
