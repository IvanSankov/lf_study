import React from 'react';

export default class Form2 extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      form: {
        errors: {}
      }
    }
  }


  submitHandler(event) {
    event.preventDefault();

    const elements = event.target.elements;

    console.log(elements.username.value, elements.password.value);

    if (elements.password.value.length < 6) {
      this.setState(prevState => {
        return {
          ...prevState,
          form: {
            ...prevState.form,
            errors: {
              ...prevState.form.errors,
              password: 'Length must be greater than 6 symbols',
            }
          }
        }
      })

      return null;
    }

    this.setState(prevState => {
      return {
        ...prevState,
        form: {
          ...prevState.form,
          errors: {}
        }
      }
    })
  }

  render() {
    return (
      <form action="#" onSubmit={(event) => this.submitHandler(event)}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        { this.state.form.errors.password && <span style={{color: 'red'}}>Length must be greater than 6 symbols</span> }
        <button type="submit">Submit</button>
      </form>
    );
  }
}