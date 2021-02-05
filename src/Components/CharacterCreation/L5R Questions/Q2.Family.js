import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import gamesApi from '../../../gamesApi/gamesApi.json';
import FamilyInfo from './Q2.FamilyInfo';

function Q2Family(props) {
  // clanName that is defined in the Clan component based on user selection and sent through the route on the params object.
  const clanName = props.match.params.clan;
  // The object of the clanFamilies from the API which is mapped below in order to return the specific
  // families that match the user selection for their clan.
  const clanFamilies = gamesApi.game.L5R.characterCreation[0].families;
  // Hook to set the familyName so familyInfo can be dynamically rendered based on user selection. This is passed to the FamilyInfo component.
  const [familyName, setFamilyName] = useState('Hida');

  const familyList = clanFamilies.map(family => {
    if (family.clanName === clanName) {
      return (
        <div className="">
          <h5 onClick={() => setFamilyName(family.familyName)}>{family.familyName}</h5>
        </div>
      );
    }
  });

  return (
    <div className="Q1Family-component">
      <h4>Choose a Family</h4>
      <div className="row">{familyList}</div>
      <div className="card-details">
        <FamilyInfo familyName={familyName} clanFamilies={clanFamilies} />
        <NavLink exact to={`/character-creation-L5R`}>
          <button>Prev</button>
        </NavLink>
        <NavLink exact to={`/character-creation-L5R/School`}>
          <button>Next</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Q2Family;
