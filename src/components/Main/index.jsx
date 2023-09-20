import { useState, useEffect, useContext, useCallback } from "react";
import { buscar, video } from "../../api/api";
import MovieCard from "../MovieCard";
import styled from "styled-components";
import { searchContext } from "../../App";
import VideoPlayer from "../VideoPlayer";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(circle, #000000, #1d1c1c);
  padding-top: 10vh;
`;

const SectionPreview = styled.section`
  width: 100%;
`;

const Section = styled.section`
  padding: 2rem 3rem;
  max-width: 1900px;
  background: radial-gradient(circle, #3a3939, #080808);
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 2rem 1.5rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    padding: 2rem 1rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    padding: 1rem 0.5rem;
  }
`;

const Title = styled.h1`
  color: #e7e7e7;
  text-align: center;
  font-size: 3rem;
  margin: 0 0 2rem;
  padding: 0;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 2.5rem;
    margin: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
    margin: 0 0 2rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 1.5rem;
    margin: 0 0 2rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 1.2rem;
    margin: 0 0 1rem;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem 2.5rem;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 1.5rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem 1rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 0.5rem;
  }
`;

export default function Main() {
  const [movies, setMovies] = useState([]);
  const { searchKey, selectedMovie, setSelectedMovie } =
    useContext(searchContext);
  const [playTrailer, setPlayTrailer] = useState(false);

  async function fetchMovie(id) {
    const data = await video(id);
    return data;
  }
  const selectMovie = useCallback(
    async (movie) => {
      setPlayTrailer(false);
      const data = await fetchMovie(movie.id);
      setSelectedMovie(data);
    },
    [setSelectedMovie]
  );

  useEffect(() => {
    async function fetchMovies() {
      try {
        if (searchKey) {
          const data = await buscar(searchKey);
          setMovies(data.results);
        } else {
          const data = await buscar();
          const test =
            data.results[Math.floor(Math.random() * data.results.length)];
          setMovies(data.results);
          selectMovie(test);
        }
      } catch (error) {
        console.error("Error al buscar películas", error);
      }
    }
    fetchMovies();
  }, [setSelectedMovie, selectMovie, searchKey]);

  return (
    <MainContent>
      <SectionPreview id="MoviePreview">
        <VideoPlayer
          selectedMovie={selectedMovie}
          playTrailer={playTrailer}
          setPlayTrailer={setPlayTrailer}
        />
      </SectionPreview>
      <Section>
        <Title>New Releases</Title>
        <Div>
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                selectedMovie={selectMovie}
              />
            ))
          ) : (
            <div>There's no videos of what your searching</div>
          )}
        </Div>
      </Section>
    </MainContent>
  );
}
