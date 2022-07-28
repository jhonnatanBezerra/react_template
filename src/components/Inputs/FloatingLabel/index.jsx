import React from 'react';
import './styles.css'

export const InputWithFloatingLabel = () => {

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  return (
    <div className={`input-container ${isFocused && 'filled'}`} >
      <input
        onFocus={handleFocus}
        onblur={handleBlur}
        className='text-input'
        autoComplete='false'
        placeholder='Digite seu nome'
        type="text" />
      <label className='label' >Nome</label>
    </div>

  );
}