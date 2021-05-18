import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { Component } from 'react';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <Bounce><h1>Hello</h1></Bounce>
        )
    }
}