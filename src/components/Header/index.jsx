import { useContext } from "react";
import { searchContext } from "../../App";
import styled from "styled-components";
import Logo from "../../assets/img/logo.png";

const HeaderContainer = styled.header`
  background: #000000;
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 10vh;
  display: flex;
`;

const DivHeader = styled.div`
  padding: 0 7rem;
  max-width: 1900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 1.5rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    padding: 0 1rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    padding: 0 0.5rem;
  }
`;

const Img = styled.img`
  width: 300px;
  cursor: pointer;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 200px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    width: 150px;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    width: 100px;
  }
`;

const Input = styled.input`
  font-size: 1.2rem;
  border-radius: 1rem;
  border: none;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  background: #292929;
  color: #e7e7e7;
  outline: none;
  font-family: "Roboto Slab", sans-serif;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 1rem;
    padding: 0.7rem 1.5rem;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 0.7rem;
    padding: 0.5rem 1rem;
    font-weight: 200;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.5rem;
    padding: 0.4rem 0.5rem;
    font-weight: 200;
  }
`;

export function Header() {
  const { setSearchKey } = useContext(searchContext);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <HeaderContainer>
      <DivHeader>
        <Img src={Logo} alt="Logo CinePreviews" />
        <Input type="text" onChange={handleChange} placeholder="search" />
      </DivHeader>
    </HeaderContainer>
  );
}
