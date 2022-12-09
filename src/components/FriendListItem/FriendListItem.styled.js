// Utils
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;

  display: flex;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #b2b2b2;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;

  border: 1px solid #b2b2b2;
  border-radius: 50%;

  margin-right: 10px;

  background-color: ${p => (p.isOnline ? '#439A97' : '#E0144C')};
`;

export const Img = styled.img`
  background-color: #f5f4fa;

  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;

  margin-left: 10px;

  color: #2b3a55;
`;
