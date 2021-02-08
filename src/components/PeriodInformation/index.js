import React from 'react';

import SearchButtons from "./SearchButtons";
import Results from "./Results";
import Loader from "./Loader";

import Client from "../../http/Client";
import Error from "./Error";

export default class PeriodInformation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
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
      ],
      error: null,
    }

    this.onChange = this.onChange.bind(this);
  }

  getPeriodInfo(period) {
    const client = new Client();

    client.getPeriodInfo(period)
      .then(data => {
        this.setState({
          isLoading: false,
          data,
        })
      })
      .catch(reason => {
        this.setState({
          isLoading: false,
          error: reason.message,
        })
      });
  }

  componentDidMount() {
    this.getPeriodInfo('rec6WVudlthBeyrKY');
  }

  onChange(event) {
    const value = event.target.value;
    this.setState(prevState => {
      return {
        isLoading: true,
        buttons: prevState.buttons.map(btn => {
          const cloneBtn = {...btn, isChecked: false};
          if (cloneBtn.value === value) {
            cloneBtn.isChecked = true;
          }

          return cloneBtn;
        })
      }
    })

    // this.getPeriodInfo(value);
    this.getPeriodInfo('rec6WVudlthBeyrKY');
  }

  render() {
    const { isLoading, data, buttons, error } = this.state;

    if (isLoading) {
      return <Loader />
    }

    return (
      <div>
        <SearchButtons buttons={buttons} handler={this.onChange} />
        { !error ? <Results data={data} /> : <Error message={error} />}
      </div>
    );
  }
}