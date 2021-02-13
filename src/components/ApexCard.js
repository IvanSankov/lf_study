import React from 'react';

import withLoader from "../HOC/withLoader";

class ApexCard extends React.PureComponent{
  render() {
    const {title, description, price} = this.props.data.fields;

    return (
      <div style={{color: 'green'}}>
        <h3>{title}</h3>
        <p>Price: {price}</p>
        <p>{ description }</p>
      </div>
    );
  }
}

export default withLoader(ApexCard, 'getApexOffer');