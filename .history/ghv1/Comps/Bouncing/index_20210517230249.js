import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Component } from 'react';

const Fadein = styled.div`animation: 5s ${keyframes`${fadeIn}`} `;

export default class ReactAnimations extends Component {
    
    render() {
        return (
            Text=""
        
            <Fadein><h1 style={{
                color: '#6B5DA9'
            }}>{Text}</h1></Fadein>
        )
    }
}