import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from "./Welcome";

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <Welcome name="Modal" />,
      document.getElementById('root-modal'),
    )
  }
}

export default Modal;