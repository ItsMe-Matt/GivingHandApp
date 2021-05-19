import React from 'react'
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Component } from 'react';

/*const Fadein = styled.div`animation: 5s ${keyframes`${fadeIn}`} `;

export default class ReactAnimations extends Component {
    
    render() {
        return (
            <Fadein><h1 style={{
                color: '#6B5DA9'
            }}>LOCATION</h1></Fadein>
        )  
    }
 
}*/




const HeadingCont = styled.h1`
color: '#6B5DA9';
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
`;
//PROPS
const Heading = ({
    text="ff", 
    textOp= 0
}) => {
    
    return <HeadingCont opText={textOp}>
       {text}
    </HeadingCont>
   
}

export default Heading;
