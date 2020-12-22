import React from 'react';
import WrapperText from "./WrapperText";

function Buy({ lastName, age }) {
  return <WrapperText>Buy { lastName }. Age { age }</WrapperText>
}

export default Buy;