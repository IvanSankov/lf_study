import React, { Component } from 'react';

class Header extends Component{

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    const { title, main } = this.props;

    console.log('Header', main);

    return <h1>{ title }</h1>
  }
}

export default Header;