import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { Container, Card, CardList } from './styles';
import Header from '../../components/Header';

export default function Dashboard() {
  const list = useSelector((state) => state.list);

  return (
    <Container>
      <Header />
      <CardList>
        <ul>
          {list.map((l) => (
            <Card key={String(l.id)}>
              <li>
                <img
                  src={`${l.thumbnail.path}.${l.thumbnail.extension}`}
                  alt={l.name}
                />

                <span>{l.name}</span>
              </li>
            </Card>
          ))}
        </ul>
      </CardList>
    </Container>
  );
}

Dashboard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};
