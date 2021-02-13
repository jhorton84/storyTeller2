import React, { useState } from 'react';
import './characterCreation.css';
import Clan from './L5R_CharacterComponents/Clan';
import Counter from './L5R_CharacterComponents/Counter';
import Family from './L5R_CharacterComponents/Family';
import Rings from './L5R_CharacterComponents/Rings';
import School from './L5R_CharacterComponents/School';
import ClassExample from './L5R_CharacterComponents/ClassExample';

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

  const [school, setSchool] = useState('')

  // Hook for setting a toggle used to disable the various select options after a choice is made so a user can't perpetually update rings and values.
  const [toggle, setToggle] = useState({
    clan: false,
    family: false,
  })
  
  // maps over the clan Object of the selected Family in the gamesApi.json file and returns an option for the select tag inside of the Family.jsx
  // passed as a prop.
  const families = characterCreation[0].Families[0][clan].map(familyOption => {
    return <option key={familyOption.familyName} value={familyOption.familyName} >{familyOption.familyName}</option>;
  });
  
  //Maps over the Schools object of the selected Clan in the gamesApi.json file and returns all the options for the School select input.
  const schools = characterCreation[0].Schools[clan].map(schoolOption => {
    // console.log('schoolOption', schoolOption.rings)
    return <option key={schoolOption.schoolName} value={schoolOption.schoolName} >{schoolOption.schoolName}</option>
  })

  // setRings(Object.assign({}, ring, {air: ring.air + 1}))
  const updateClan = (clan) => {
    // setClan(clan);
    const mapping = {
      "Crab": "Earth",
      "Crane": "Air",
      "Dragon": "Fire",
      "Lion": "Water",
      "Phoenix": "Void",
      "Scorpion": "Air",
      "Unicorn": "Water"
    };
    updateRings(mapping[clan]);
    setToggle(Object.assign({}, toggle, {clan: true}))
  }

  const updateFamilyRing = (ring) => {
    updateRings(ring)
    setToggle(Object.assign({}, toggle, {family: true}))
  }

  // function for updating the value of the rings in state based on user's character Creation choices.
  const updateRings = (ringValue) => {
    console.log('ringValue', ringValue);
    setRings((prevRing) => {
      return Object.assign({}, prevRing, {
        [ringValue.toLowerCase()]: prevRing[ringValue.toLowerCase()] + 1
      })
    });
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

  const updateSchool = (school) => {
    console.log('school choice: ', school)
    let elementRings;
    characterCreation[0].Schools[clan].forEach(element => {
      if(element.schoolName === school) {
        elementRings = element.rings;
      }
    });
    console.log('element rings', elementRings)
    // elementRings.forEach(elementRing => {
    //   updateRings(elementRing);
    // })
    updateRings(elementRings[0]);
    updateRings(elementRings[1]); 
  }
  // this.state = {
  //   Air: 1
  // }



  console.log('ring values 3:', ring);

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
      <School characterCreation={characterCreation} schools={schools} clan={clan} school={school} updateSchool={updateSchool} setSchool={setSchool} />
      <Counter />
      <button onClick={() => resetCharacterChoices()}>Reset</button>
      <ClassExample />
    </div>
  );
}

export default CharacterCreationForm;
