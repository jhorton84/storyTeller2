import React from 'react';
import { NavLink } from 'react-router-dom';

const L5RScreen = () => {
  return (
    <div className='L5R-routes'>
      <ul><NavLink exact to="/characterCreation/l5r">Create a New Character</NavLink></ul>
      <ul><NavLink exact to="/">Campaign</NavLink></ul>
      <ul><NavLink exact to="/">Guide to Rokugan</NavLink></ul>
      <ul><NavLink exact to="/">Return to Menu</NavLink></ul>
    </div>
  );
};

export default L5RScreen;
