import React from 'react';

export default class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch('./getList')
      .then((response) => this.setState({list: response.data}) )
  }

  render() {
    const  {list} = this.state;

    return list === [] ? 'Loading...' : list.map(entity => <List entity={entity} />);
  }
}

function List({ entity }) {
  return <div>{ entity.title }</div>
}