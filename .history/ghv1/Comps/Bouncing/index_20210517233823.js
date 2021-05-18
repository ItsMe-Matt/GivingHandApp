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




const HeadingCont = styled.span`

`;
//PROPS
const Heading = ({
    text="Test Button", 
}) => {
    
    return <HeadingCont>
       
            {text}
        
    </HeadingCont>
   
}

export default Heading;
