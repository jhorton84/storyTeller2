import React from 'react';

function Q1Clan({ clans, setClan }) {
  const clanList = clans.map(clan => {
    return (
      <div className="row small-card">
        <p onClick={() => setClan(clan.clanName)}>{clan.clanName}</p>
        <div></div>
      </div>
    );
  });
  return <div className="Q1Clan-component">{clanList}</div>;
}

export default Q1Clan;
