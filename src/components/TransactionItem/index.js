/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteItem} = props
  const {id, title, amount, type} = transactionDetails

  const deleteTransaction = () => {
    deleteItem(id)
  }

  return (
    <li className="transaction-container">
      <div className="transaction-details">
        <p className="transaction-amount">{title}</p>
        <p className="transaction-amount">Rs {amount}</p>
        <p className="transaction-amount">{type}</p>
      </div>
      <button
        type="button"
        className="delete-btn"
        testid="delete"
        onClick={deleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
