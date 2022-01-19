import React, { useEffect, useState } from 'react';
import './characterCreation.css';
import Rings from './Rings';
import QuestionInput from './QuestionInput';

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
  });

  const [ringPool, setRingPool] = useState(0);

  const [school, setSchool] = useState('')

  // Hook for setting a toggle used to disable the various select options after a choice is made so a user can't perpetually update rings and values.
  const [toggle, setToggle] = useState({
    default: false,
    clan: false,
    family: false,
    familyRing: false,
    school: false,
  })
  
  // maps over the clan Object of the selected Family in the gamesApi.json file and returns an option for the select tag inside of the Family.jsx
  // passed as a prop.
  // const families = characterCreation[0].Families[0][clan].map(familyOption => {
  //   return <option key={familyOption.familyName} value={familyOption.familyName} >{familyOption.familyName}</option>;
  // });
  
  //Maps over the Schools object of the selected Clan in the gamesApi.json file and returns all the options for the School select input.
  // const schools = characterCreation[0].Schools[clan].map(schoolOption => {
  //   // console.log('schoolOption', schoolOption.rings)
  //   return <option key={schoolOption.schoolName} value={schoolOption.schoolName} >{schoolOption.schoolName}</option>
  // })

  // setRings(Object.assign({}, ring, {air: ring.air + 1}))
  const updateClan = (clan) => {
    // setClan(clan);
    console.log('updateClan function fired with value of', clan);
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
    setToggle(Object.assign({}, toggle, {clan: true}));
  }

  const updateFamily = (family) => {
    console.log('updateFamily function fired with value of', family);
    setFamily(family);
    setToggle(Object.assign({}, toggle, {family: true}));
  };

  const updateFamilyRing = (ring) => {
    console.log('updateFamilyRing fired with a value of', ring);
    updateRings(ring)
    setToggle(Object.assign({}, toggle, {familyRing: true}));
  }

  // function for updating the value of the rings in state based on user's character Creation choices.
  const updateRings = (ringValue) => {
    console.log('updateRings function fired with value of', ringValue);
    setRings((prevRing) => {
      return Object.assign({}, prevRing, {
        [ringValue.toLowerCase()]: prevRing[ringValue.toLowerCase()] + 1
      })
    });

  };

  // useEffect(() => {
  //   console.log('ring object', ring);
  //   if(ring.air === 4) {
  //     alert('You cannot create a character with a value greater than 3 in any ring. Please choose another ring to increase');
  //     setRings(Object.assign({}, ring, {air: ring.air - 1}))
  //   }
  // }, [ring]);

  // useEffect(() => {
  //   if(ring.earth === 4 || ring.air === 4 || ring.water === 4 || ring.fire === 4 || ring.void === 4) {
      
  //   }
  // })

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
    setToggle(Object.assign({}, clan, {clan: false}));
  }

  const updateSchool = (school) => {
    console.log('school choice: ', school)
    let elementRings;
    characterCreation[0].Schools[clan].forEach(element => {
      if(element.name === school) {
        elementRings = element.rings;
      }
    });
    console.log('element rings', elementRings)
    updateRings(elementRings[0]);
    updateRings(elementRings[1]); 
    setToggle(Object.assign({}, toggle, {school: true}));
  }

  // console.log('ring values 3:', ring);

  return (
    <div>
      <div className='row'>
        <Rings ring={ring} />
        {/* <div className='characterCreationChoices'>
          <p>Clan: {clan}</p>
          <p>Family: {family}</p>
          <p>School: {school}</p>
          <p>Giri: </p>
          <p>Ninjo: </p>
        </div> */}
      </div>
      <div className='characterCreationChoices'>
        <QuestionInput moduleName={"Clan"} setStateFunction={setClan} stateValueToUpdate={clan} apiObject={characterCreation[0].clans} confirmChoiceFunction={updateClan} toggleValue={toggle.clan} prevQuestion={''} />
        <QuestionInput moduleName={"Family"} setStateFunction={setFamily} stateValueToUpdate={family} apiObject={characterCreation[0].Families[0][clan]} confirmChoiceFunction={updateFamily} toggleValue={toggle.family} prevToggle={toggle.clan}/>
        <QuestionInput moduleName={"Family Ring"} setStateFunction={setFamilyRing} stateValueToUpdate={familyRing} apiObject={!family ? [] : characterCreation[0].ringIncreases.Family[clan][family].rings} confirmChoiceFunction={updateFamilyRing} toggleValue={toggle.familyRing} prevToggle={toggle.family} />
        <QuestionInput moduleName={"School"} setStateFunction={setSchool} stateValueToUpdate={school} apiObject={characterCreation[0].Schools[clan]} confirmChoiceFunction={updateSchool} toggleValue={toggle.school} prevToggle={toggle.familyRing}/>
      </div>
      <button onClick={() => resetCharacterChoices()}>Reset</button>
    </div>
  );
};

export default CharacterCreationForm;
