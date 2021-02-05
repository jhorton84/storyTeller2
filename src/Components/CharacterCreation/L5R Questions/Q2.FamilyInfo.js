import React from 'react';

function FamilyInfo({ familyName, clanFamilies }) {
  // console.log('clansInfo ==>', clansInfo);
  // console.log('clanCheck ==> ', clansInfo[0]);
  console.log('familyInfo', clanFamilies);

  const familyInfo = clanFamilies.map(familyObject => {
    if (familyObject.familyName === familyName) {
      // console.log('clanObject', clanObject.clanName);
      // console.log('clanName', clanName);
      return (
        <div className="small-card">
          <p>{familyObject.clanName} Clan Stat Increases</p>
          <p>Ring: {familyObject.ring1}</p>
          <p>Ring: {familyObject.ring2}</p>
          <p>Skill: {familyObject.skill}</p>
          <p>Status: {familyObject.status}</p>
          <p>Description: {familyObject.description}</p>
        </div>
      );
    }
  });

  return (
    <div className="FamilyInfo-component">
      <div>{familyInfo}</div>
    </div>
  );
}

export default FamilyInfo;
