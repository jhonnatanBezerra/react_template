import React, { useEffect } from 'react';
import { AnimatedDots } from '../AnimatedDots';
import { ButtonContainer } from './styles';

export const Button = (props) => {

  // const { disabled } = props;
  const [isActivated, setIsActivated] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActivated(false);
    }, 2000);
  }, [isActivated])

  const handleClick = () => {

    setIsActivated(!isActivated);


  }

  return (
    <>
      <ButtonContainer {...props} onClick={handleClick} isActivated={isActivated} disabled={isActivated} >
        {isActivated ? <AnimatedDots /> : props.message}
      </ButtonContainer>
    </>
  );
}