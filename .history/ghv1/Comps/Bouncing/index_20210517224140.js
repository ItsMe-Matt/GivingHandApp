import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { Component } from 'react';



export default class ReactAnimations extends Component {
    render() {
        return (
            <bounce><h1>Hello</h1></bounce>
        )
    }
}