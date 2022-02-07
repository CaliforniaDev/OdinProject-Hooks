import React, { useState, useEffect } from 'react';
import styled  from 'styled-components';

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');


  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === 'black') return setColor('red');
      return setColor('black');
    }
    document.addEventListener('click', changeColorOnClick);

    return () => {
      document.removeEventListener('click', changeColorOnClick);
    }
  },[color]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount} disabled={count >= 10}>Increment</button>
      <button onClick={decrementCount} disabled={count <= 0}>Decrement</button>
      <ClickDiv
        color={color}
        id="myDiv"
      >
        This div can change color. Click on me!
      </ClickDiv>

    </div>
  );
}


const ClickDiv = styled.div`
  color: white;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  background: ${props => props.color};
`;

export default App;
