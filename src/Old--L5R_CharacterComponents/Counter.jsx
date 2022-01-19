import React, {useState, useEffect} from 'react';

function Counter() {
  let [count, setCount] = useState(0);

  const updateCount = () => {
    console.log('count Before ==>', count)
    setCount(count + 1);
    console.log('count After ==>', count)
    setCount(prevCount => {
      console.log('prevCount', prevCount);
      return prevCount + 1
    });
  }
  
  useEffect(() => {
   console.log('useEffect hit');
  //  updateCount();
   console.log('count in useEffect', count)
  });


  return (
    <div>
      {count}
      <button onClick={() =>{updateCount()}}>+</button>
    </div>
  );
};

export default Counter;