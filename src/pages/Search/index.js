import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import md5 from 'md5';

import { add } from '../../store/actions';
import api from '../../services/api';

import Loading from '../../components/Loading';
import logo from '../../assets/marvel.png';

import { Container, Content } from './styles';

export default function Search({ history }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleHero(e) {
    setLoading(true);
    e.preventDefault();
    const ts = new Date().getTime();
    const apikey = '7ed4cfcab3bbda139bf880d953064dac';
    const private_key = 'bfb714506aaf5a1a4f080b3ddb81c413c841385e';
    const hash = md5(`${ts}${private_key}${apikey}`);

    const response = await api.get('characters', {
      params: {
        nameStartsWith: name,
        ts,
        apikey,
        hash,
      },
    });
    const { results } = response.data.data;

    dispatch(add(results));

    history.push('/dashboard');
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <form onSubmit={handleHero}>
          <input
            placeholder="Search an hero..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">
            <MdSearch size={25} color="#000" />
          </button>
        </form>
      </Content>
    </Container>
  );
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
