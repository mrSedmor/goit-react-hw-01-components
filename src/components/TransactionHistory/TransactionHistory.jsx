import PropTypes from 'prop-types';
import {
  Table,
  HeaderRow,
  HeaderCell,
  Row,
  Cell,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <HeaderRow>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </HeaderRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </Row>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
