import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.myFirstRef = React.createRef();
  }

  componentDidMount() {
    this.myFirstRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.myFirstRef}/>
  }
}