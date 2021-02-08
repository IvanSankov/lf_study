import React from 'react';

const TYPE_ORDERS = 'orders';
const TYPE_MONEY = 'money';
const TYPE_HOURS = 'hours';

export default class Results extends React.PureComponent {
  render() {
    const {data} = this.props;

    return (
      <div id="result">
        {data.map(item => {
          if (item.type === TYPE_ORDERS) {
            return <OrderItem key={item.type} item={item} />
          }

          return <Item key={item.type} item={item} />
        })}
      </div>
    );
  }
}

function OrderItem({ item }) {
  return (
    <div>
      <h4>Order: {item.value}</h4>
      <p>{ item.text }</p>
    </div>
  );
}

function Item({item}) {
  return (
    <div>
      <h4>{ item.value }</h4>
      <p>{ item.text }</p>
    </div>
  );
}