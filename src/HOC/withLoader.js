import React from 'react';

import Loader from "../components/PeriodInformation/Loader";
import Client from "../http/Client";

export default function withLoader(Component, method) {
  return class ComponentWithLoader extends React.PureComponent{
    constructor(props) {
      super(props);

      this.state = {
        data: null,
      }
    }

    componentDidMount() {
      const client = new Client();

      client[method]().then(data => this.setState({
        data: data,
      }));
    }


    render() {
      const {data} = this.state;

      return data ? <Component data={data} {...this.props} /> : <Loader />
    }
  }
}

