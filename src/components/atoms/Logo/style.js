import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -20px;
`;

export const LogoText = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  opacity: .8;
  margin: 0;

  span {
    font-weight: 500;
  }
`;

export const LogoDescription = styled.span`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  opacity: .4;

  b {
    font-weight: 700;
  }
`;
