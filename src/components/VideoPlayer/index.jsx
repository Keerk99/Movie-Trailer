import styled from "styled-components";
import ReactPlayer from "react-player";
import { BsPlayCircle } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import img_no_video from "../../assets/img/img_no_video.png";
import { RiEmotionSadLine } from "react-icons/ri";

const Div = styled.div`
  background: url(${(props) => props.$bg || "#6bd1ff"}) no-repeat center / cover;
  min-height: 600px;
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    gap: 1rem;
    min-height: 500px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    gap: 0.5rem;
    padding: 2rem 1.5rem;
    min-height: 500px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
    min-height: 400px;
    padding: 2rem 1rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
    min-height: 300px;
    padding: 1rem 0.5rem;
  }
`;

const DivTexto = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1.5rem;
    gap: 0.5rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    padding: 1.2rem;
    gap: 0.3rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    padding: 0.5rem 1rem;
    gap: 0.2rem;
  }
`;

const H1 = styled.h1`
  color: #e7e7e7;
  font-size: 3rem;
  margin: 0;
  font-weight: 400;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const P = styled.p`
  color: #e7e7e7;
  margin: 0;
  font-size: 1.1rem;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.7rem;
  }
`;

const Button = styled.button`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  cursor: pointer;
  background: transparent;
  color: #e7e7e7;
  border: none;
  font-weight: lighter;
  transition: color ease-in 0.5s;
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  &&:hover {
    color: #a71818;
  }
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.9rem;
  }
`;

const DivVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    height: 350px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 250px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    height: 200px;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    height: 190px;
  }
`;

const DivNoVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
`;

const H2 = styled.h2`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #e7e7e7;
  font-size: 1.5rem;
  @media screen and (min-width: 425px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 150px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    width: 120px;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    width: 100px;
  }
`;

export default function VideoPlayer({
  selectedMovie,
  playTrailer = false,
  setPlayTrailer,
}) {
  const img_path = "https://image.tmdb.org/t/p/original";

  const renderTrailer = () => {
    if (selectedMovie.videos.results.length > 0) {
      const trailer = selectedMovie.videos.results.find(
        (video) => video.name === "Official Trailer"
      );
      const key = trailer ? trailer.key : selectedMovie.videos.results[0].key;
      return (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${key}`}
          controls={true}
          width="100%"
          height="100%"
        />
      );
    } else {
      return (
        <DivNoVideo>
          <H2>
            There's no video yet <RiEmotionSadLine />
          </H2>
          <Img src={img_no_video} alt="There's no video" />
        </DivNoVideo>
      );
    }
  };
  return (
    <Div $bg={`${img_path}${selectedMovie.backdrop_path}`}>
      <DivTexto>
        <H1>{selectedMovie.title}</H1>
        {selectedMovie.overview ? <P>{selectedMovie.overview}</P> : null}
        {playTrailer ? (
          <Button onClick={() => setPlayTrailer(false)}>
            <SlClose />
            Close
          </Button>
        ) : (
          <Button onClick={() => setPlayTrailer(true)}>
            <BsPlayCircle />
            Play Trailer
          </Button>
        )}
      </DivTexto>
      <DivVideo>
        {selectedMovie.videos && playTrailer ? renderTrailer() : null}
      </DivVideo>
    </Div>
  );
}
