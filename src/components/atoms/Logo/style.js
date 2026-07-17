/* eslint-disable quotes */
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-top: -20px;
  max-width: 600px;
  margin: 0 auto;

  a {
    color: black;
  }
`;

export const LogoText = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  text-align: left;
  opacity: 0.8;
  margin: 0;

  span {
    font-weight: 500;
  }
`;

export const LogoDescription = styled.p`
  display: block;
  font-family: "Ubuntu", sans-serif;
  margin-top: 0.5rem;
  margin-bottom: 0rem;
  line-height: 1.5rem;

  b {
    font-weight: 700;
  }
`;

export const LogoLinks = styled.nav`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  opacity: 1;

`;
