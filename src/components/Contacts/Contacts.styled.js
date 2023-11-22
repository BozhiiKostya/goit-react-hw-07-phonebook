import { styled } from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const StyledItem = styled.li`
  margin-bottom: 10px;
  min-width: 300px;
`;

export const StyledText = styled.p`
  display: inline-block;
  width: 250px;
  font-size: 18px;
`;

export const StyledButton = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  display: inline-block;
  border-radius: 3px;
  font-size: 16px;
  &:hover {
    background-color: #e74c3c;
    color: #ffffff;
  }
`;
