import React, { useState } from 'react';
import './characterCreation.css';
import Clan from './L5R_CharacterComponents/Clan';
import Family from './L5R_CharacterComponents/Family';
import Rings from './L5R_CharacterComponents/Rings';

function CharacterCreationForm({ characterCreation }) {
  
  // Hook for setting the value of the Clan by the user
  const [clan, setClan] = useState('');

  // Hook for setting the value of the Family by the user
  const [family, setFamily] = useState('');

  // Hook for family ring selected
  const [familyRing, setFamilyRing] = useState('');

  // Hook for setting the value of the Five rings based on user choices.
  const [ring, setRings ] = useState({
    earth: 1,
    air: 1,
    water: 1,
    fire: 1,
    void: 1
  })

  // Hook for setting a toggle used to disable the various select options after a choice is made so a user can't perpetually update rings and values.
  const [toggle, setToggle] = useState({
    clan: false,
    family: false,
  })
  
  // maps over the clan Object of the selected Family in the gamesApi.json file and returns an option for the select tag inside of the Family.jsx
  // passed as a prop.
  const families = characterCreation[0].Families[0][clan].map(familyOption => {
    return <option key={familyOption.familyName}>{familyOption.familyName}</option>;
  });
  
  // setRings(Object.assign({}, ring, {air: ring.air + 1}))
  const updateClan = (clan) => {
    // setClan(clan);
    updateRings(clan)
    setToggle(Object.assign({}, toggle, {clan: true}))
  }

  const updateFamilyRing = (ring) => {
    updateRings(ring)
    setToggle(Object.assign({}, toggle, {family: true}))
  }

  const updateRings = (ringValue) => {
    console.log('ring', ringValue);
    if (ringValue === 'Crab' || ringValue === "Earth") {
      setRings(Object.assign({}, ring, {earth: ring.earth +1}))
    } else if (ringValue === 'Crane' || ringValue === "scorpion" || ringValue === "Air") {
      setRings(Object.assign({}, ring, {air: ring.air +1}))
    } else if (ringValue === 'Dragon' || ringValue === "Fire") {
      setRings(Object.assign({}, ring, {fire: ring.fire +1}))
    } else if (ringValue === 'Lion' || ringValue === "Unicorn" || ringValue === "Water") {
      setRings(Object.assign({}, ring, {water: ring.water +1}))
    } else if (ringValue === 'Phoenix' || ringValue === "Void") {
      setRings(Object.assign({}, ring, {void: ring.void +1}))
    } else {
      setRings(Object.assign({}, ring, {
        earth: 1,
        air: 1,
        water: 1,
        fire: 1,
        void: 1
      }))
    }
  };
  const resetCharacterChoices = () => {
    setClan('');
    setFamily('');
    setRings(Object.assign({}, ring, {
      earth: 1,
      air: 1,
      water: 1,
      fire: 1,
      void: 1
    }))
    setToggle(Object.assign({}, clan, {clan: false}))
  }

  return (
    <div>
      <div className='row'>
        <Rings ring={ring} />
        <div>
          <p>Clan: {clan}</p>
          <p>Family: {family}</p>
          <p>Giri: </p>
          <p>Ninjo: </p>
        </div>
      </div>
      <Clan clan={clan} setClan={setClan} updateClan={updateClan} characterCreation={characterCreation} toggle={toggle}/>
      <Family families={families} clan={clan} family={family} setFamily={setFamily} characterCreation={characterCreation} updateRings={updateRings} toggle={toggle} setFamilyRing={setFamilyRing} updateFamilyRing={updateFamilyRing} familyRing={familyRing} />
      <button onClick={() => resetCharacterChoices()}>Reset</button>
    </div>
  );
}

export default CharacterCreationForm;
