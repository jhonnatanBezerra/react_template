import React from 'react';
import { Input, InputContainer, Label } from './styles';
import { BiUser } from 'react-icons/bi';

export const InputWithFloatingLabel = (props) => {


  const inputRef = React.useRef(null);
  const [isFixed, setIsFixed] = React.useState(false);

  const handleBlur = () => {
    if (inputRef.current.value) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  const handleFocusInput = () => {
    inputRef.current.focus();
  }

  return (
    <>


      <InputContainer>

        <BiUser size={22} color={'#ccc'} style={{ position: 'absolute', top: ' 50%', transform: 'translate(50%,-50%)' }} />

        <Input
          ref={inputRef}
          onBlur={handleBlur}
          placeholder={props.label}
          {...props} />


        <Label onClick={handleFocusInput} fixed={isFixed}>{props.label}</Label>

      </InputContainer>

    </>


  );
}