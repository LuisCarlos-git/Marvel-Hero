import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { details } from '../../store/actions';

import Header from '../../components/Header';

import { Container, DetailsHero, Comics, Title, Description } from './styles';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  dispatch(details(id));
  const hero = useSelector((state) => state.details);

  return (
    <Container>
      <Header />
      <DetailsHero>
        <main>
          <img
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
          />
          <div>
            <Title>{hero.name}</Title>
            <Description notDescrption={!hero.description}>
              {hero.description ? hero.description : 'Description not found'}
            </Description>
          </div>
        </main>

        <Comics>
          {hero.comics.items.map((comic) => (
            <ul>
              <li>{comic.name}</li>
            </ul>
          ))}
        </Comics>
      </DetailsHero>
    </Container>
  );
}
