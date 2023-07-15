import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButton = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButton)}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor, color: 'white' }}
      >
        Change To {newButton}
      </button>
      <br />
      <input
        type="checkbox"
        onChange={() => setDisabled((prev) => !prev)}
        id={'disable-button-checkbox'}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
      <br />
    </div>
  );
}

export default App;
