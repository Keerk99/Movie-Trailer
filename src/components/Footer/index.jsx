import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #000000;
`;

const Div = styled.div`
  display: flex;
  color: #e7e7e7;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
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

const P = styled.p`
  text-align: center;
  color: #e7e7e7;
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Div>
        <P>© Copyright Desarrollado por Antony Huaman</P>
        <span>2023</span>
      </Div>
    </FooterContainer>
  );
}
