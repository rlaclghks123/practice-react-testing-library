import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButton = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button onClick={() => setButtonColor(newButton)} style={{ backgroundColor: buttonColor }}>
        Change To {newButton}
      </button>
    </div>
  );
}

export default App;
