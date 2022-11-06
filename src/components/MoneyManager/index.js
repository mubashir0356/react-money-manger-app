import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    balance: 0,
    transactionList: [],
    inputTitle: '',
    inputAmount: '',
    inputType: transactionTypeOptions[0].displayText,
  }

  onTitleChange = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChangeType = event => {
    this.setState({inputType: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, inputType} = this.state
    const newTransaction = {
      id: uuidv4(),
      title: inputTitle,
      amount: inputAmount,
      type: inputType,
    }

    if (inputType === 'Income') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(inputAmount),
        transactionList: [...prevState.transactionList, newTransaction],
        inputType: transactionTypeOptions[0].displayText,
        inputTitle: '',
        inputAmount: '',
      }))

      this.setState(prevState => ({
        balance: prevState.income - prevState.expense,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(inputAmount),
        transactionList: [...prevState.transactionList, newTransaction],
        inputType: transactionTypeOptions[0].displayText,
        inputTitle: '',
        inputAmount: '',
      }))

      this.setState(prevState => ({
        balance: prevState.income - prevState.expense,
      }))
    }
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const toBeDeletedTransaction = transactionList.filter(
      each => each.id === id,
    )
    const newTransactionList = transactionList.filter(each => each.id !== id)

    if (toBeDeletedTransaction[0].type === 'Income') {
      this.setState(prevState => ({
        transactionList: newTransactionList,
        income: prevState.income - parseInt(toBeDeletedTransaction[0].amount),
        balance: prevState.balance - parseInt(toBeDeletedTransaction[0].amount),
      }))
    } else {
      this.setState(prevState => ({
        transactionList: newTransactionList,
        expenses:
          prevState.expenses - parseInt(toBeDeletedTransaction[0].amount),
        balance: prevState.balance - parseInt(toBeDeletedTransaction[0].amount),
      }))
    }
  }

  render() {
    const {
      income,
      expenses,
      balance,
      transactionList,
      inputTitle,
      inputAmount,
      inputType,
    } = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="profile-container">
            <h1 className="heading"> Hi, Richard </h1>
            <p className="description">
              Welcome back to your
              <span className="money-manager"> Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              income={income}
              expenses={expenses}
              balance={balance}
            />
          </div>
          <div className="transaction-details-container">
            <div className="form-container">
              <h1 className="form-heading">Add Transaction</h1>
              <form className="form" onSubmit={this.onClickAddBtn}>
                <label htmlFor="title"> TITLE </label>
                <input
                  placeholder="TITLE"
                  id="title"
                  className="title-input"
                  type="text"
                  onChange={this.onTitleChange}
                  value={inputTitle}
                />
                <label htmlFor="amount"> AMOUNT </label>
                <input
                  placeholder="AMOUNT"
                  id="amount"
                  className="title-input"
                  type="text"
                  onChange={this.onChangeAmount}
                  value={inputAmount}
                />
                <label htmlFor="type"> TYPE </label>
                <select
                  id="type"
                  className="title-input"
                  onChange={this.onChangeType}
                  value={inputType}
                >
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.displayText}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="form-heading"> History </h1>
              <div className="history-box">
                <div className="transactions-heading">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </div>
              </div>
              <ul className="history-list">
                {transactionList.map(eachList => (
                  <TransactionItem
                    key={eachList.id}
                    deleteItem={this.deleteTransaction}
                    transactionDetails={eachList}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
