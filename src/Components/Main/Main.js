import React, { useEffect } from 'react';
import './Main.css';

function Main() {

  useEffect(() => {
    console.log('in useEffect main');
    console.log('window location', window.location);
  //   window.onpopstate = e => {
  //     console.log('e', e.path[0].location)
  //  }
  });

  // useEffect(() => {
  //   console.log('in useEffect main history');
  //   // eslint-disable-next-line no-restricted-globals
  //   history.back();
  // });

  return (
    <div className="main-component">
      <div className="main1">Main</div>
    </div>
  );
}

export default Main;
