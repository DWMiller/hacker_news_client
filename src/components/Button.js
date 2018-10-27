import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid ${props=>props.theme.black};
  color: ${props=>props.theme.black};
  background: white;
  line-height: 1em;
  padding: 0.6em 0.9em;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;
