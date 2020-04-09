import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Container } from './styles';
import Header from '../../components/Header';

export default function Dashboard() {
  const list = useSelector((state) => state.list);
  const history = useHistory();

  function handleDetails(id) {
    history.push(`/details/${id}`);
  }

  return (
    <Container>
      <Header />
      <div>
        <ul>
          {list.map((l) => (
            <li key={String(l.id)}>
              <img
                src={`${l.thumbnail.path}.${l.thumbnail.extension}`}
                alt={l.name}
              />
              <span>{l.name}</span>

              <button type="button" onClick={() => handleDetails(l.id)}>
                Details
              </button>
            </li>
          ))}
        </ul>
      </div>
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
