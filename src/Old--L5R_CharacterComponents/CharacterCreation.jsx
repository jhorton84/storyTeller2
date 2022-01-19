import React from 'react';
import GamesApi from '../../../gamesApi/gamesApi.json';
import CharacterCreationForm from './CharacterCreationForm';
import CharacterCreationDnD from '../DungeonsCreateCharacter/CharacterCreationDnD';

function CharacterCreation(props) {
  //Renders dynamically either the L5R or the DnD character creation components and their various character creation
  // screens based on if the user selected an L5R or DnD campaign to play.
  const gameName = props.match.params.game;

  let characterCreation;
  gameName === 'DnD'
    ? // Determins the questions from the api to send based in which table-top game type is chosen and
      // sends it to Character Creation component for that game (L5R or DnD).
      (characterCreation = GamesApi.game.DnD.characterCreation)
    : (characterCreation = GamesApi.game.L5R.characterCreation);
  // console.log('characterCreation', characterCreation);
  // console.log('params', props.match.params);
  return (
    <div className="CharacterCreation">
      {gameName === 'L5R' ? (
        <CharacterCreationForm characterCreation={characterCreation} />
      ) : (
        <CharacterCreationDnD characterCreation={characterCreation} />
      )}
    </div>
  );
}

export default CharacterCreation;
