import React from 'react';

import withLoader from '../HOC/withLoader';

class TarkovCard extends React.PureComponent{
  render() {
    const {title, description} = this.props.data.fields;

    return (
      <div style={{color: 'red'}}>
        <h3>{title}</h3>
        <p>{ description }</p>
      </div>
    );
  }
}

export default withLoader(TarkovCard, 'getTarkovOffer');