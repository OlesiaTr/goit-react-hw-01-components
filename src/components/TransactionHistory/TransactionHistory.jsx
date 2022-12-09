// Utils
import PropTypes from 'prop-types';

// Styles
import { Container, Header, Row, Data } from './TransactionHistory.styled';

export const TransactionHistory = ({ item }) => {
  return (
    <Container>
      <thead>
        <tr>
          <Header>Type</Header>
          <Header>Amount</Header>
          <Header>Currency</Header>
        </tr>
      </thead>

      <tbody>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <Row key={id}>
              <Data>{type}</Data>
              <Data>{amount}</Data>
              <Data>{currency}</Data>
            </Row>
          );
        })}
      </tbody>
    </Container>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
