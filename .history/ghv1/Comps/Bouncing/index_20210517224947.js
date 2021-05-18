import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Component } from 'react';

const Fadein = styled.div`animation: 5s ${keyframes`${fadeIn}`} infinite`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <Fadein><h1>Location</h1></Fadein>
            <Fade
        )
    }
}