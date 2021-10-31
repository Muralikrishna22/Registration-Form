import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onSubmit = event => {
    event.preventDefault()

    const isValidFirstName = this.isValidFirstName()
    const isValidLastName = this.isValidLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  submitAnotherResponse = event => {
    event.preventDefault()
    this.setState({firstName: '', lastName: '', isFormSubmitted: false})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  isValidFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  isValidLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.isValidFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.isValidLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  renderFirstName = () => {
    const {firstName, showFirstNameError} = this.state

    const inputClassName = showFirstNameError ? 'input input-error' : 'input'

    return (
      <div className="input-container">
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          id="firstName"
          className={inputClassName}
          placeholder="firstName"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showFirstNameError && <p className="name-error">Required</p>}
      </div>
    )
  }

  renderLastName = () => {
    const {lastName, showLastNameError} = this.state

    const inputClassName = showLastNameError ? 'input input-error' : 'input'

    return (
      <div className="input-container">
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          id="lastName"
          className={inputClassName}
          placeholder="lastName"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {showLastNameError && <p className="name-error">Required</p>}
      </div>
    )
  }

  registrationForm = () => (
    <form className="registration-form" onSubmit={this.onSubmit}>
      {this.renderFirstName()}
      {this.renderLastName()}
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  )

  submitSuccessForm = () => (
    <form className="registration-form" onSubmit={this.submitAnotherResponse}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-text"> Submitted Successfully </p>
      <button type="submit" className="submit-btn">
        Submit Another Response
      </button>
    </form>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-container">
        <h1 className="registration-heading">Registration</h1>
        {isFormSubmitted ? this.submitSuccessForm() : this.registrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
