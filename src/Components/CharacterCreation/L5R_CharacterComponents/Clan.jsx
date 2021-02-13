import React from 'react';

function Clan({ clan, setClan, updateClan, characterCreation, toggle }) {
  return (
    <div className="Clan question-container">
      <label htmlFor="clan">Select Clan</label>
      <select id="clan" onChange={e => setClan(e.target.value)} disabled={toggle.clan ? true : false}>
        <option value="" name="">
          select
        </option>
        <option value="Crab">Crab</option>
        <option value="Crane">Crane</option>
        <option value="Dragon">Dragon</option>
        <option value="Lion">Lion</option>
        <option value="Phoenix">Phoenix</option>
        <option value="Scorpion">Scorpion</option>
        <option value="Unicorn">Unicorn</option>
      </select>
      <p></p>
      <button className={toggle.clan ? "hidden" : "next-button"} onClick={() => updateClan(clan)}disabled={!clan ? true : false}>Next</button>
    </div>
  );
};

export default Clan;