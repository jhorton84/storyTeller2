import nodemon from 'nodemon';
import React, { useState, useEffect } from 'react';
import './Rings.css';

function Rings({
  rings,
  setRings,
  reduceRing,
  updateRings,
  updateRingPool,
  extraRingPool,
  setRingsConfirm,
}) {

  console.log('EXTRARINGPOOL', extraRingPool);

  // Copy rings in state to compare against for points.
  const [ringPoints, setRingPoints] = useState({
    air: rings.air,
    water: rings.water,
    earth: rings.earth,
    fire: rings.fire,
    void: rings.void,
  });


  // Check the ring values and set to a max of 3 and assign extra points for those above.
  useEffect(() => {
    checkRingValues();
  });
  
  // Reset values of the rings back to default values prior to assigning extra points in case
  // User is unsatisfied with their selection.
  const reset = () => {
    console.log('resetting');
    setRings({
      air: ringPoints.air,
      earth: ringPoints.earth,
      fire: ringPoints.fire,
      water: ringPoints.water,
      void: ringPoints.void,
    });
    console.log('reset rings', rings);
  }

  // Checks the values of the rings. Ran in useEffect when component loads.
  const checkRingValues = (ringValues = rings) => {
    let newRings = ringValues;
    for (const ring in newRings) {
      if (newRings[ring] > 3 ) {
        reduceRing(ring, +1);
      };
    };
  };

  // Fired when selecting "+" button for each Ring value. Adds a point to the ring
  // and subtracts a point from pool.
  const adjustRings = (ring, operator) => {
    if (operator === +1) {
      updateRings(ring)
      updateRingPool(-1)
    };
  };

  // Renders the Rings.
  return (
    <div className="rings">
      <p>You are only allowed a maximum of 3 points in a ring. Your choices have caused you to need to spread points to other rings. REMEMBER a ring cannot be raised above your lowest ring + Void Ring.</p>
      <div className="row">
        <div className="ring column">
          <div>
            <p>Earth</p>
            {rings.earth}
            <button disabled={rings.earth === 3 || extraRingPool === 0 ? true : false } onClick={()=> adjustRings("earth", +1)}>+</button>
          </div>
        </div>
        <div className="ring column">
          <div>
            <p>Air</p>
            {rings.air}
            <button disabled={rings.air === 3 || extraRingPool === 0 ? true : false } onClick={()=> adjustRings("air", +1)}>+</button>
          </div>
        </div>
      </div>
      <div className="row push">
        <div className="ring column">
          <div>
            <p>Water</p>
            {rings.water}
            <button disabled={rings.water === 3 || extraRingPool === 0 ? true : false } onClick={()=> adjustRings("water", +1)}>+</button>
          </div>
        </div>
        <div className="ring column">
          <div>
            <p>Fire</p>
            {rings.fire}
            <button disabled={rings.fire === 3 || extraRingPool === 0 ? true : false } onClick={()=> adjustRings("fire", +1)}>+</button>
          </div>
        </div>
      </div>
      <div className="ring column bottom-ring">
        <div>
          <p>Void</p>
          {rings.void}
          <button disabled={rings.void === 3 || extraRingPool === 0 ? true : false } onClick={()=> adjustRings("void", +1)}>+</button>
        </div>
      </div>
      <div>
        <button onClick={() => reset()}>reset points</button>
        <button disabled={extraRingPool > 0 ? true : false } onClick={() => setRingsConfirm(true)}>Continue</button>
      </div>
    </div>
  );
};

export default Rings;