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
opacity:${props=> props.opText}
 transition: all 5s;
`;
//PROPS
const Heading = ({
    text="ff", 
    textOp=0
}) => {
    
    return <HeadingCont opText={text}>
       {text}
    </HeadingCont>
   
}

export default Heading;
