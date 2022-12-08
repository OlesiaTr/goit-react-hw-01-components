// Utils
import styled from 'styled-components';

export const Container = styled.section`
  border-radius: 4px;
  border: 1px solid #b2b2b2;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  width: 320px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  padding: 20px 0;

  text-align: center;
  text-transform: uppercase;
  font-size: 20px;

  color: #2b3a55;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 20px 14px;

  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 14px;

  color: #ffffff;

  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;

  color: #ffffff;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
