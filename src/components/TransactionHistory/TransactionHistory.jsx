import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.headerRow}>
          <th className={css.headerCell}>Type</th>
          <th className={css.headerCell}>Amount</th>
          <th className={css.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.row} key={id}>
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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
