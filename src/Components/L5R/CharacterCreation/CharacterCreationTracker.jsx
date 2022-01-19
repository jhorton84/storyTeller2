import React from 'react';

const CharacterCreationTracker = ({
  clan,
  family,
  school,
  emotion,
  relationship,
  bushido,
}) => {
  return (
    <div className={'main-container tracker'}>
      <p className='tracker-color'>Step 1</p>
      <p className={clan ? 'tracker-color' : 'untracked'}>Step 2</p>
      <p className={family ? 'tracker-color' : 'untracked'}>Step 3</p>
      <p className={school ? 'tracker-color' : 'untracked'}>Step 4</p>
      <p className={emotion ? 'tracker-color' : 'untracked'}>Step 5</p>
      <p className={relationship ? 'tracker-color' : 'untracked'}>step 6</p>
    </div>
  );
};

export default CharacterCreationTracker;