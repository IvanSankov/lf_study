import React from 'react';
import Buy from "./Buy";

class Welcome extends React.Component{
  constructor(props) {
    super(props);

    console.log('Constructor', props.name);
  }


  render() {
    const { name, lastName, age, orders } = this.props;

    if (lastName) {
      return <Buy age={age} lastName={lastName} />
    }

    return <div>Hello {name || '%Username%'}!</div>
  }
}

export default Welcome