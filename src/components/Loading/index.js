import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <div>
        <FaSpinner size={50} color="#FFF" />
      </div>
    </Container>
  );
}
