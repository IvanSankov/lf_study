import React from 'react';

import SearchButtons from "./SearchButtons";
import Results from "./Results";
import Loader from "./Loader";

import Client from "../../http/Client";

export default class PeriodInformation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
    }
  }

  componentDidMount() {
    const client = new Client();

    client.getPeriodInfo('rec6WVudlthBeyrKY')
      .then(data => {
        this.setState({
          isLoading: false,
          data,
        })
      });
  }

  render() {
    const { isLoading, data } = this.state;

    if (isLoading) {
      return <Loader />
    }


    return (
      <div>
        <SearchButtons />
        <Results data={data} />
      </div>
    );
  }
}