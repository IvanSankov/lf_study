import React from 'react';

export default class SearchButtons extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      buttons: [
        {
          isChecked: true,
          value: 'day'
        },
        {
          isChecked: false,
          value: 'week'
        },
        {
          isChecked: false,
          value: 'month',
        },
      ]
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    this.setState(prevState => {
      return {
        buttons: prevState.buttons.map(btn => {
          const cloneBtn = {...btn, isChecked: false};
          if (cloneBtn.value === value) {
            cloneBtn.isChecked = true;
          }

          return cloneBtn;
        })
      }
    })
  }

  render() {
    const {buttons} = this.state;

    return (
      <div id="search">
        { buttons.map(btn => <input key={btn.value}
                                    onChange={this.onChange}
                                    type="radio"
                                    name="1"
                                    value={btn.value}
                                    checked={btn.isChecked} />) }
      </div>
    );
  }
}