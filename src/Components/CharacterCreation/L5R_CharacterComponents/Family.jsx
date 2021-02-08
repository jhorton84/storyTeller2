import React, { useEffect } from 'react';

function Family({families, clan, family, setFamily, characterCreation, setFamilyRing, toggle, updateFamilyRing, familyRing}) {
  console.log('family', family);
  console.log('toggle.clan', toggle.clan);
  
  return (
    <div className={!toggle.clan ? 'hidden' : 'family question-container'}>
      <div>
        {/* Select for user to select a family */}
        <label htmlFor="family">Family</label>
        <select name="family" id="family" onChange={e => setFamily(e.target.value)} disabled={toggle.family ? true : false}>
          Family
          <option key="default">select</option>
          {families}
        </select>
        {/* Select for user to select a ring based on chosen family */}
        <label className={!toggle.clan ? 'hidden' : "ringSelect"} htmlFor='FamilyRing'>Family Ring</label >
        <select className={!toggle.clan ? 'hidden' : "ringSelect"} name="familyRing" onChange={e => setFamilyRing(e.target.value)} disabled={toggle.family ? true : false}>
          <option value="default">select</option>
          <option value={family ? characterCreation[0].ringIncreases.Family[clan][family].rings[0]: ""}>{family ? characterCreation[0].ringIncreases.Family[clan][family].rings[0]: ""}</option>
          <option value={family ? characterCreation[0].ringIncreases.Family[clan][family].rings[1]: ""}>{family ? characterCreation[0].ringIncreases.Family[clan][family].rings[1]: ""}</option>
        </select>
      </div>
      <button className={toggle.family ? "hidden" : "next-button"} onClick={() => updateFamilyRing(familyRing)} disabled={!familyRing ? true : false}>Next</button>
    </div>
  );
};

export default Family;