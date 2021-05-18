import React, { component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Bounce = styled.div`keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;