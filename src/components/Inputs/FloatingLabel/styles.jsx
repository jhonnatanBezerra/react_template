import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 280px;
  top: -10px;
`

export const Label = styled.label`
    position: absolute;
    left: ${props => props.fixed ? '10px' : '2.5rem'};
    top: 14px;
    transition: all 0.2s;
    padding: 0 2px;
    z-index: 1;
    color: #b3b3b3;
    top: ${props => props.fixed && '-10px'};
    cursor: auto;
    font-size: ${props => props.fixed && '12px'};;

    ::before{
      content: "";
      height: 5px;
      background: #fff;
      position: absolute;
      left: 0;
      top: 10px;
      width: 100%;
      z-index: -1;
    }
`

export const Input = styled.input`
  padding: 0.8rem 2.5rem;
  /* padding: 0.8rem; */
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background: #fff;
  color: #444;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  transition: all 0.3s;

  :focus{
    border: 2px solid #2280FF;
  }

  :focus + ${Label}{
    top: -10px;
    left: 10px;
    color: #2280FF;
    font-size: 12px;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
  
    opacity: 0;
    transition: all 0.3s;
  }

  :focus::placeholder{
    /* opacity: 1; */
  }

  `