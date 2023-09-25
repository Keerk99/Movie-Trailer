import styled from "styled-components";
import { ReleaseDate } from "../DateFormat";
import { AiFillStar } from "react-icons/ai";
import { RiEmotionSadLine } from "react-icons/ri";

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ImgContainer = styled.div`
  position: relative;
  display: flex;
`;
const Img = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: 1rem;
  height: 100%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform ease 0.5s;
  &&:hover {
    transform: scale(1.03);
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    min-height: 180px;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    min-height: 130px;
  }
`;

const DivVote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #e7e7e7;
  bottom: 3%;
  left: 3%;
  position: absolute;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.85);
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 0.3rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    padding: 0.1rem;
    border: 1px solid #e7e7e7;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    padding: 0rem;
    border: 0.5px solid #e7e7e7;
    top: 3%;
    left: unset;
    right: 3%;
  }
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e7e7e7;
  font-size: 0.75rem;
  gap: 2px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 0.5rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.4rem;
  }
`;

const DivTexto = styled.div`
  @media screen and (min-width: 0) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  color: #e7e7e7;
  font-size: 1rem;
  margin-bottom: 0;
  font-weight: 550;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 0.6rem;
    margin: 0;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.5rem;
    margin: 0;
  }
`;

const SpanDate = styled.span`
  color: #e7e7e7;
  font-size: 0.8rem;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.6rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 0.5rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.4rem;
  }
`;

const NDContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export default function MovieCard({ movie, selectedMovie }) {
  const img_path = "https://image.tmdb.org/t/p/original/";

  const releaseDate = ReleaseDate(movie.release_date);
  const vote = movie.vote_average.toFixed(1);
  return (
    <MovieCardContainer>
      {movie.poster_path ? (
        <>
          <ImgContainer>
            <a href="#MoviePreview">
              <Img
                src={`${img_path}${movie.poster_path}`}
                alt={movie.title}
                onClick={() => {
                  selectedMovie(movie);
                }}
              />
            </a>
            <DivVote>
              <Span>
                {vote}
                <AiFillStar />
              </Span>
            </DivVote>
          </ImgContainer>
          <DivTexto>
            <H2>{movie.title}</H2>
            <SpanDate>{releaseDate}</SpanDate>
          </DivTexto>
        </>
      ) : (
        <>
          <NDContainer>
            <H2>
              No Data Found <RiEmotionSadLine />
            </H2>
          </NDContainer>
        </>
      )}
    </MovieCardContainer>
  );
}
