import React, { useState } from 'react';
import gamesApi from '../../../api/gamesApi.json';
import './CharacterCreationL5R.css';
import CharacterCreationTracker from './CharacterCreationTracker';
import Rings from './Rings';

const NewCharacterL5R = () => {

  const [ toggleStart, setToggleStart ] = useState(false);
  const [ clan, setClan ] = useState("");
  const [ clanIndex, setClanIndex ] = useState(0);
  const [ family, setFamily ] = useState('');
  const [ familyIndex, setFamilyIndex ] = useState(0);
  const [ familyRing, setFamilyRing ] = useState('');
  const [ familyRingConfirm, setFamilyRingConfirm ] = useState(false);
  const [ school, setSchool ] = useState('');
  const [ schoolIndex, setSchoolIndex ] = useState(0);
  const [ emotion, setEmotion ] = useState('');
  const [ emotionConfirm, setEmotionConfirm ] = useState(false);
  const [ relationship, setRelationship ] = useState('');
  const [ relationshipConfirm, setRelationshipConfirm ] = useState(false);
  const [ bushido, setBushido ] = useState(null);
  const [ bushidoConfirm, setBushidoConfirm ] = useState(false);
  const [ glory, setGlory ] = useState(0);
  const [ honor, setHonor ] = useState(0);
  const [ koku, setKoku ] = useState(0);
  const [ skills, setSkills ] = useState({
    aesthetics: 0,
    composition: 0,
    design: 0,
    smithing: 0,
    fitness: 0,
    martialArts: 0,
    meditation: 0,
    tactics: 0,
    culture: 0,
    government: 0,
    medicine: 0,
    sentiment: 0,
    theology: 0,
    command: 0,
    courtesy: 0,
    games: 0,
    performance: 0,
    commerce: 0,
    labor: 0,
    seafaring: 0,
    skulduggery: 0,
    survival: 0,
  });
  const [ rings, setRings ] = useState({
    Air: 1,
    Earth: 1,
    Fire: 1,
    Water: 1,
    Void: 1,
  })
  const [ weapons, setWeapons ] = useState([]);
  const [ armor, setArmor ] = useState([]);
  const [ gear, setGear ] = useState([]);
  const [ combatSkills, setCombatSkills ] = useState([]);
  const [ techniques, setTechniques ] = useState([]);
  const [ exp, setExp ] = useState(0);
  
  // Destructuring Api Objects for clans
  const { game: { L5R: { characterCreation }}} = gamesApi;
  const clans = characterCreation[0].clans;
  const families = clan ? characterCreation[0].families[0][clan]: "";
  const schools = clan && family ? characterCreation[0].schools[clan]: '';
  const famRing1 = family ? characterCreation[0].ringIncreases.Family[clan][family].rings[0].name : ""
  const famRing2 = family ? characterCreation[0].ringIncreases.Family[clan][family].rings[1].name : ""
  console.log('');
  console.log('clan', clan);
  console.log('family', family);
  console.log('school', school);
  console.log('emotion', emotion);
  console.log('relationship', relationship);
  console.log('bushido', bushido);
  console.log('');

  const getData = (array, index) => {
    const cardDisplay = array.map(val => {
      return (
        <div className="card-container">
          <img className="card-image" alt={`${val.name}`} src={val.image} />
          <p className="title">{val.name}</p>
          <p className="description">{val.description}</p>
        </div>
      );
    })
    return cardDisplay[index];
  }

  const getRelationship = (clan) => {
    return (
      <div className="card-container text-block">
        <img className="card-image" alt={`${clan.name}`} src={clan.image} />
        <p className="title">{clan.name}</p>
        <p className="description">{clan.bushidoTenet}</p>
      </div>
    );
  }

  const setCard = (array, index, value, hook) => {
    const newIndex = (index + value);
    const maxLength = array.length
    if (newIndex === maxLength ) {
      hook(0);
    } else if (newIndex === -1) {
      hook(maxLength - 1)
    } else {
      hook(index + value);
    }
  };

  const selectedCharacterChoice = (array, index, hook) => {
    const card = array[index]
    hook(`${card.name}`)
  };

  const updateRings = (ringValue) => {
    console.log('updateRings function fired with value of', ringValue);
    setRings((prevRing) => {
      return Object.assign({}, prevRing, {
        [ringValue.toLowerCase()]: prevRing[ringValue.toLowerCase()] + 1
      })
    });

  };

  const updateFamilyRing = (ring) => {
    console.log('updateFamilyRing fired with a value of', ring);
    updateRings(ring)
    // setToggle(Object.assign({}, toggle, {familyRing: true}));
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
    // setToggle(Object.assign({}, toggle, {school: true}));
  }

  const generateRings = () => {
    const clanMapping = {
      "Crab": "Earth",
      "Crane": "Air",
      "Dragon": "Fire",
      "Lion": "Water",
      "Phoenix": "Void",
      "Scorpion": "Air",
      "Unicorn": "Water"
    };
    updateRings(clanMapping[clan]);
    updateRings(familyRing);
    updateSchool(school);
  };

  return (
    <div className="component-container">
      {/* Default */}
      { !toggleStart && (
      <div
        // className={`${MODULE_NAME}__spinner flex flex-column flex-align-content-stretch flex-align-items-stretch text-align-center pad-4-t pad-responsive-lr`}
        // css={spinnerStyles}
      >
        <h1>Welcome to Character Creation</h1>
        <button onClick={() => setToggleStart(true)}>Get Started</button>
      </div>
      )}

      { toggleStart && (
        <CharacterCreationTracker
        clan={clan}
        family={family}
        school={school}
        emotion={emotionConfirm}
        relationship={relationshipConfirm}
        bushido={bushidoConfirm}
        />
      )}

      {/* Choose a clan */}
      { toggleStart && !clan && (
        <div className="main-container">
          <h3>What Clan does your Character belong to?</h3>
          <div className='carousel'>
            {getData(clans, clanIndex)}
            <div className='carousel-buttons'>
              <button onClick={() => setCard(clans, clanIndex, -1, setClanIndex)}>Prev Clan</button>
              <button onClick={() => setCard(clans, clanIndex, +1, setClanIndex)}>Next Clan</button>
            </div>
          </div>
          <div className='journey-button'>
            <button disabled={true} onClick={() => setClan("")}>Go Back</button>
            <button onClick={() => selectedCharacterChoice(clans, clanIndex, setClan)}>Confirm</button>
          </div>
        </div>
      )}

      {/* Choose a Family */}
      { clan && !family && (
        <div className="main-container">
          <h3>What Family does your Character belong to?</h3>
          <div className='carousel'>
            {getData(families, familyIndex)}
            <div className='carousel-buttons'>
              <button onClick={() => setCard(families, familyIndex, -1, setFamilyIndex)}>Prev</button>
              <button onClick={() => setCard(families, familyIndex, +1, setFamilyIndex)}>Next</button>
            </div>
          </div>
          <div className='journey-button'>
            <button onClick={() => setClan("")}>Go Back</button>
            <button onClick={() => selectedCharacterChoice(families, familyIndex, setFamily)}>Confirm</button>
          </div>
        </div>
      )}

      {/* Choose a Family Ring */}
      { family && !familyRingConfirm && (
        <div className={!family ? "main-container hidden" : "main-container"}>
          <h3>Choose a Family Ring to Increase</h3>
        <div className='checklist'>
            <input type="radio" id="familyRing1" name="familyRing1" value={famRing1} onClick={() => setFamilyRing(famRing1)} />
            <label htmlFor="familyRing1">+ 1 {famRing1} Ring</label>
        </div>
        <div className='checklist'>
            <input type="radio" id="familyRing2" name="familyRing2" value={famRing2} onClick={() => setFamilyRing(famRing2)} />
            <label htmlFor="familyRing2">+ 1 {famRing2} Ring</label>
        </div>
        <div className='journey-button'>
          <button onClick={() => setFamily("")}>Go Back</button>
          <button onClick={() => setFamilyRingConfirm(true)}>Confirm</button>
        </div>
      </div>
      )}

      {/* Choose a School */}
      { familyRingConfirm && !school && (
        <div className="main-container">
        <h3>What is your character's school and what roles does that school fit into?</h3>
        <div className='carousel'>
          {getData(schools, schoolIndex)}
          <div className='carousel-buttons'>
            <button onClick={() => setCard(schools, schoolIndex, -1, setSchoolIndex)}>Prev</button>
            <button onClick={() => setCard(schools, schoolIndex, +1, setSchoolIndex)}>Next</button>
          </div>
        </div>
        <div className='journey-button'>
          <button onClick={() => setFamily("")}>Go Back</button>
          <button onClick={() => selectedCharacterChoice(schools, schoolIndex, setSchool)}>Confirm</button>
        </div>
      </div>
      )}

      {/* Choose a Ring */}
      { school && !emotionConfirm && (
        <div className="main-container">
          <h3>How Does Your Character Stand Out Within Their School?</h3>
          <div className="column left-align">
            <div className='checklist'>
              <input type="radio" id="creativity" name="emotion" value="Fire" onClick={() => setEmotion("Fire")} />
              <label htmlFor="creativity">Creativity, passion, or drive</label>
            </div>
            <div className='checklist'>
              <input type="radio" id="grace" name="emotion" value="Air" onClick={() => setEmotion("Air")} />
              <label htmlFor="grace">Grace, eloquence, or empathy</label>
            </div>
            <div className='checklist'>
              <input type="radio" id="adaptability" name="emotion" value="Water" onClick={() => setEmotion("Water")} />
              <label htmlFor="adaptability">Adaptability, friendliness, or awareness</label>
            </div>
            <div className='checklist'>
              <input type="radio" id="thoroughness" name="emotion" value="Earth" onClick={() => setEmotion("Earth")} />
              <label htmlFor="thoroughness">Thoroughness, patience, or calm</label>
            </div>
            <div className='checklist'>
              <input type="radio" id="self-awareness" name="emotion" value="Void" onClick={() => setEmotion("Void")} />
              <label htmlFor="self-awareness">Self-awareness, insight, or mysticism</label>
            </div>
          </div>
          <div className='journey-button'>
            <button onClick={() => setSchool("")}>Go Back</button>
            <button onClick={() => setEmotionConfirm(true)}>Confirm</button>
          </div>
        </div>
      )}

        {/* Clan Relationship */}
      { emotionConfirm && !relationshipConfirm && (
        <div className="main-container">
          <h3>What is Your Character's Relationship With Their Clan?</h3>
          {getRelationship(clans[clanIndex])}
          <div className="column left-align">
            <div className='checklist'>
                <input type="radio" id="obedient" name="relationship" value="+5 glory" onClick={() => setRelationship("obedient")} />
                <label htmlFor="creativity">Your character believes firmly in the precepts of their clan and the values it holds dear.</label>
            </div>
            <div className='checklist'>
                <input type="radio" id="rebel" name="relationship" value="+1 skill" onClick={() => setRelationship("rebel")} />
                <label htmlFor="grace">Rebel - you have a fundamental disagreement with your clan's beliefs, policies, or practices.</label>
            </div>
          </div>
          <div className='journey-button'>
            <button onClick={() => setEmotionConfirm(false)}>Go Back</button>
            <button onClick={() => setRelationshipConfirm(true)}>Confirm</button>
          </div>
        </div>
      )}

      {/* Bushido */}
      { relationshipConfirm && !bushidoConfirm && (
        <div>
          <div className="column left-align">
            <div className='checklist'>
                <input type="radio" id="staunch" name="bushido" value="+10 honor" onClick={() => setBushido("honor")} />
                <label htmlFor="creativity">Your character believes firmly in the precepts of their clan and the values it holds dear.</label>
            </div>
            <div className='checklist'>
                <input type="radio" id="diverge" name="bushido" value="+1 skill" onClick={() => setBushido('rebel')} />
                <label htmlFor="grace">Rebel - you have a fundamental disagreement with your clan's beliefs, policies, or practices.</label>
            </div>
          </div>
          <div className='journey-button'>
            <button onClick={() => setRelationshipConfirm(false)}>Go Back</button>
            <button onClick={() => setBushidoConfirm(true)}>Confirm</button>
          </div>
        </div>
      )}

      {/* Final Step - Display Character Sheet */}
      { bushidoConfirm && (
        <div>
          <Rings rings={rings} />
          <p>Clan: {clan}</p>
          <p>Family: {family}</p>
          <p>School: {school}</p>
          <p>Glory:</p>
          <p>Honor:</p>
          <p>Koku:</p>
          <p></p>
        </div>
      )}

    </div>
  );
};

export default NewCharacterL5R;
