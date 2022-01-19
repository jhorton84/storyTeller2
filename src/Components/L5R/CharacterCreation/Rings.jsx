import React from 'react';

function Rings({rings}) {
  
  return (
    <div className="rings">
      <div className="row">
        <div className="ring">{rings.earth} Earth</div>
        <div className="ring">{rings.air} Air</div>
      </div>
      <div className="row push">
        <div className="ring">{rings.water} Water</div>
        <div className="ring">{rings.fire} Fire</div>
      </div>
      <div className="ring bottom-ring">{rings.void} Void</div>
    </div>
  );
};

export default Rings;