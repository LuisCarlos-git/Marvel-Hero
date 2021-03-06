import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowBack } from 'react-icons/md';

import { details } from '../../store/actions';

import Header from '../../components/Header';

import { Container, DetailsHero, Comics, Title, Description } from './styles';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  dispatch(details(id));
  const hero = useSelector((state) => state.details);

  return (
    <>
      <Container>
        <nav>
          <Link to="/dashboard">
            <MdArrowBack size={30} color="#FFF" />
          </Link>
        </nav>
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
              <ul key={comic.name}>
                <li>{comic.name}</li>
              </ul>
            ))}
          </Comics>
        </DetailsHero>
      </Container>
    </>
  );
}
