/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  const balance = income - expenses

  return (
    <div className="money-details">
      <div className="balance-money-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-icon"
        />
        <div className="money-card-details">
          <p className="money-card-title"> Your Balance </p>
          <p className="money-card-amount" testid="balanceAmount">
            RS {balance}
          </p>
        </div>
      </div>
      <div className="income-money-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-icon"
        />
        <div className="money-card-details">
          <p className="money-card-title"> Your Income </p>
          <p className="money-card-amount" testid="incomeAmount">
            RS {income}
          </p>
        </div>
      </div>
      <div className="expenses-money-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-icon"
        />
        <div className="money-card-details">
          <p className="money-card-title"> Your Expenses </p>
          <p className="money-card-amount" testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
