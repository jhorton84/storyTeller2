import React from 'react';
import { NavLink } from 'react-router-dom';

function Q1Clan({ questions }) {
  console.log('questions in Clan', questions);
  const clans = questions.questions[0].clans.map(clan => {
    return (
      <div className="row small-card">
        <img src={clan.image} className="small-card" />
        <div className="card small-card">
          <div className="card-details">
            <h2 style={{ color: `${clan.color}` }}>{clan.clan}</h2>
            <p>Ring Increase: {clan.ring}</p>
            <p>Skill Increase: {clan.skill}</p>
            <p>Status: {clan.status}</p>
            <p>{clan.description}</p>
            <NavLink exact to="/character-creation-L5R/Family">
              <button>Select</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  });
  return <div className="Q1Clan-component">{clans}</div>;
}

export default Q1Clan;
