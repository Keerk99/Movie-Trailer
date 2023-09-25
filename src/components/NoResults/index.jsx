import styled from "styled-components";
import img_no_results from "../../assets/img/img_no_results.png";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #e7e7e7;
  text-align: center;
  font-size: 2.5rem;
  margin: 0 0 2rem;
  padding: 0;
  font-weight: 400;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 2.5rem;
    margin: 0 0 2rem;
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

const Img = styled.img`
  color: #e7e7e7;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 250px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    width: 200px;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    width: 200px;
  }
`;

export default function NoResults() {
  return (
    <Div>
      <Title>There's no results of what your searching for</Title>
      <Img src={img_no_results} alt="No results of waht you're searching for" />
    </Div>
  );
}
