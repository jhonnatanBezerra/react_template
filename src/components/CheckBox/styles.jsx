import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap:  ${props => props.checked ? '20px' : '10px'};
  transition: all 0.375s;

`

export const CheckBoxContainer = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;

`

export const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;

`

export const Checkmark = styled.span`
  display: block;
  width: inherit;
  height: inherit;
  border: 3px solid #434343;
  border-radius: 6px;
  transition: all 0.375s;
`