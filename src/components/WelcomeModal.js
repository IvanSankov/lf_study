import React from 'react';
import Modal from "./Modal";

const style = {
  opened: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.5)'
  },
  closed: {
    display: 'none',
  }
};

export default class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    })
  }

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <button onClick={() => this.toggle()}>Show welcome modal</button>
        <Modal>
          <div style={isOpen ? style.opened : style.closed}>
            Hi, %Username%
            <button onClick={() => this.toggle()}>Close modal</button>
          </div>
        </Modal>
      </>
    )
  }
}