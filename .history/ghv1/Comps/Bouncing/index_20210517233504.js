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

const ButtonInput = styled.button`
 background-color:${props=>props.backgroundColor};
 color:black;
 padding:1em;
 width:100%;
 border-radius: 9px;
 border:none;
 font-family: 'Montserrat', sans-serif;
 font-size: 0.8em;
 font-weight:bold;
 filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
 color:white;
 cursor:pointer;

`;
const ButtonCont = styled.span`
width:8em;
margin-bottom:.8em;
cursor:pointer;
`;
//PROPS
const Button = ({
    text="Test Button",
    bgcolor="#F7D488",
    
    onClick = ()=> {}
}) => {
    const router = useRouter();
    return <ButtonCont onClick={onClick}>
        <ButtonInput backgroundColor={bgcolor}>
            {text}
        </ButtonInput>
    </ButtonCont>
   
}

export default Button;
