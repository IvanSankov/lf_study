import React from 'react';

class Welcome extends React.Component{
  constructor(props) {
    super(props);

    console.log('Constructor', props.name);
  }


  render() {
    const { name, lastName, age, orders } = this.props;

    if (lastName) {
      return <div>Buy { lastName }. Age { age }</div>
    }

    return <div>Hello {name || '%Username%'}!</div>
  }
}

export default Welcome