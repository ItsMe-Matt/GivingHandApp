import React from 'react'
import styled, { keyframes } from 'styled-components';

const HeadingCont = styled.h1`
animation-iteration-count: 1;
@keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  color
`;
//PROPS
const Heading = ({
    text="", 
}) => {
    
    return <HeadingCont>
       {text}
    </HeadingCont>
   
}

export default Heading;
