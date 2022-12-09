// Utils
import styled from 'styled-components';

export const Container = styled.table`
  border-radius: 8px;
  border: 1px solid #b2b2b2;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  margin: 0 auto;
  width: 320px;
`;

export const Header = styled.th`
  text-align: center;

  padding: 10px 0;

  color: #2b3a55;
  background-color: #b9e0ff;

  :not(:last-child) {
    border-right: 1px solid #b2b2b2;
  }
`;

export const Row = styled.tr`
  &:nth-child(2n) {
    background-color: #eeeeee;
  }
`;

export const Data = styled.td`
  text-align: center;

  padding: 10px 0;

  :not(:last-child) {
    border-right: 1px solid #b2b2b2;
  }
`;
