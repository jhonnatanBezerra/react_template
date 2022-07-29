import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 50px;
  width: 280px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:  ${props => props.isActivated ? '#22b7ff' : '#2280FF'};
  color: #fff;
  font-size: 20px;
  border: none;
  transition: all 0.2s ease-in-out;
`