import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/marvel.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </Container>
  );
}
