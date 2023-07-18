import { useState } from 'react';
import styled from 'styled-components';

const StyleContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const StyleInput = styled.input`
  margin: 5px;
`;

const StyleButton = styled.button`
  margin-top: 10px;
  width: 30%;
`;

const StyleInputContainer = styled.div`
  position: relative;

  div {
    position: absolute;
    right: -400px;
    padding: 50px;
    top: 0px;
    background-color: white;
  }

  label {
    cursor: pointer;
    color: blue;
  }
`;

const SummaryForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleOver = (e) => {
    setHovered(true);
  };

  const handleLeave = (e) => {
    setHovered(false);
  };

  return (
    <StyleContainer>
      <StyleInputContainer>
        <StyleInput
          onChange={(e) => setDisabled(e.target.checked)}
          type="checkbox"
          id={'checkboxLabel'}
        />
        I agree to
        <label htmlFor="checkboxLabel" onMouseOver={handleOver} onMouseLeave={handleLeave}>
          Terms and Conditions
        </label>
        {hovered && <div>no ice cream will actually be delivered</div>}
      </StyleInputContainer>

      <StyleButton disabled={!disabled}>Confirm order</StyleButton>
    </StyleContainer>
  );
};

export default SummaryForm;
