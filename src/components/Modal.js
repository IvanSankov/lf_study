import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from "./Welcome";

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('root-modal'),
    )
  }
}

export default Modal;