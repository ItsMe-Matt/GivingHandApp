import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';


const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

export default class ReactAnimation extends Component {
    render() {
        return (
            <Bounce><h1>Hello Bounce</h1></Bounce>
        );
    }
}