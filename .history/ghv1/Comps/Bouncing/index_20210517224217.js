import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { Component } from 'react';

const Bounce = styled.div`animation: 2s ${keyframes`${}}

export default class ReactAnimations extends Component {
    render() {
        return (
            <bounce><h1>Hello</h1></bounce>
        )
    }
}