import React from 'react';

export default class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        error: null,
        value: ''
      },
    }

    this.handlerOnChange = this.handlerOnChange.bind(this);
  }

  handlerOnChange(event) {
    this.setState({
      input: {
        value: event.target.value.toUpperCase(),
        error: event.target.value.length < 6
      }
    });
  }

  render() {
    const { value, error } = this.state.input;

    return (
      <>
        <input type="text" value={value} onChange={this.handlerOnChange}/>
        { error && <span style={{color: 'red'}}>Length must be greater than 6 symbols</span> }
      </>
    )
  }
}