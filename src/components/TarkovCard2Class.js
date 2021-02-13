import React from "react";
import Client from "../http/Client";

export default class TarkovCard2Class extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: 'red',
      hide: false,
      tarkovInfo: {
        isLoading: true,
        error: null,
        data: null,
      },
      width: null,
    }

    this.toggleColor = this.toggleColor.bind(this);
    this.toggleHideHandler = this.toggleHideHandler.bind(this);
  }

  toggleColor() {
    this.setState(prevState => {
      return {
        color: prevState.color === 'red' ? 'green' : 'red',
      };
    });
  }

  toggleHideHandler() {
    this.setState(prevState => {
      return {
        hide: !prevState.hide
      }
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.color !== this.state.color) {
      console.log(`**************************`);
      console.log(`Class Tarkov Card2 ${this.state.color}`);
      console.log(`**************************`);
    }

    if (prevState.hide !== this.state.hide) {
      console.log(`--------------------------`);
      console.log(`Class Tarkov Card2 HIDE ${this.state.hide}`);
      console.log(`--------------------------`);
    }
  }

  componentDidMount() {
    const client = new Client();

    client.getTarkovOffer()
      .then(data => this.setState({
        tarkovInfo: {
          isLoading: false,
          error: null,
          data: data
        }
      }))
      .catch(reason => this.setState({
        tarkovInfo: {
          isLoading: false,
          error: reason.message,
          data: null
        }
      }))

    console.log(`**************************`);
    console.log(`Class Tarkov Card2 ${this.state.color}`);
    console.log(`**************************`);

    console.log(`--------------------------`);
    console.log(`Hook Tarkov Card2 HIDE ${this.state.hide}`);
    console.log(`--------------------------`);


    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth
    })
  };

  render() {
    const {title, description} = this.props;
    const {color, hide, tarkovInfo, width} = this.state;

    if (tarkovInfo.error) {
      return <h1>ERROR!!!!</h1>
    }

    if (tarkovInfo.isLoading) {
      return <h1>LOADING!</h1>
    }

    if (hide) {
      return <button onClick={this.toggleHideHandler}>Show</button>
    }

    return (
      <>
        <h1>Window width: {width}</h1>
        <button onClick={this.toggleHideHandler}>Hide</button>
        <button onClick={this.toggleColor}>Toggle color</button>
        <div style={{color: color}}>
          <h3>Title: {title}</h3>
          <p>Description: {description}</p>
        </div>
      </>
    );
  }
}