import React from 'react';

function ClanInfo({ clanName, clansInfo }) {
  // console.log('clansInfo ==>', clansInfo);
  // console.log('clanCheck ==> ', clansInfo[0]);
  const clanInfo = clansInfo.map(clanObject => {
    if (clanObject.clanName === clanName) {
      // console.log('clanObject', clanObject.clanName);
      // console.log('clanName', clanName);
      return (
        <div className="small-card">
          <p>{clanObject.clanName} Clan Stat Increases</p>
          <p>Ring: {clanObject.ring}</p>
          <p>Skill: {clanObject.skill}</p>
          <p>Status: {clanObject.status}</p>
          <img src={clanObject.image} />
        </div>
      );
    }
  });

  return (
    <div className="ClanInfo-component">
      <div>{clanInfo}</div>
    </div>
  );
}

export default ClanInfo;
