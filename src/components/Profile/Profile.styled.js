// Utils
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 320px;
  margin: 0 auto;
  margin-bottom: 40px;

  border-radius: 8px;
  border: 1px solid #b2b2b2;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding-top: 20px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  margin: 0 auto;
  margin-bottom: 10px;

  border: 1px transparent;
  border-radius: 60px;

  background-color: #f5f4fa;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;

  color: #3c4048;
`;

export const BasicText = styled.p`
  color: #b2b2b2;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  background-color: #f5f4fa;

  border-top: 1px solid #3c4048;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px 0;

  :not::last-child {
    padding-right: 30px;
    border-right: 1px solid #3c4048;
  }
`;

export const EmphText = styled.span`
  font-weight: 700;
  font-size: 18px;

  color: #3c4048;
`;
