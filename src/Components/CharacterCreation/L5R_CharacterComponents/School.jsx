import React from 'react';

function School({ characterCreation, schools, clan, school, updateSchool }) {
  // console.log('characterCreation', characterCreation[0].Schools[clan])
  return (
    <div className = "School question-container" >
      <div>
        <label>Choose a School</label>
        <select onChange={e => updateSchool(e.target.value)} >
          <option value="">Select</option>
          {schools}
        </select>
      </div>
    </div>
  )
};

export default School;