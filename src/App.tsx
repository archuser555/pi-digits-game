import React, { useState } from 'react';
import TheTest from './Test';
import Pi from './pi';
import './Button.css';
import './App.css';

function App() {
  const [mode, setMode] = useState(false);

  return (
    <>
      {mode ? <div className='center'>
          <TheTest />
        </div> : (
        <div className="center">
          <h1>The <Pi /> Test<p className="bn" onClick={() => setMode(true)}>Start</p></h1>
        </div>
      )}
    </>
  );
}

export default App;