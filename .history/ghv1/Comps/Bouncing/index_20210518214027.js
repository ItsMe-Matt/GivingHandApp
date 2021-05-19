import React from 'react'
import styled, { keyframes } from 'styled-components';
import styles from '../../styles/ourMission.module.css'






const HeadingCont = styled.headeranimation`
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
  animation: fadeIn ease 3 s;
  -webkit-animation: fadeIn ease 3s;
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
