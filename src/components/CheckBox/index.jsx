import React from 'react';
import { CheckBoxContainer, Checkmark, Container, InputCheckbox } from './styles';
import './styles.css';

export const CheckBox = (props) => {

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Container checked={isChecked}>
      <CheckBoxContainer className='label' >
        <InputCheckbox onClick={handleCheckboxChange} type="checkbox" checked={isChecked} />
        <Checkmark className='checkbox' />

      </CheckBoxContainer>
      <p>{props.label}</p>
    </Container>
  );
}