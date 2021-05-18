import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Component } from 'react';

const Fadein = styled.div`animation: 2s ${keyframes`${fadeIn}`} infinite`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <Fadein><h1>Hello</h1></Fadein>
        )
    }
}