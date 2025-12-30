import React from 'react';

import {
  FooterContainer,
  FooterText,
} from './style';

function Footer() {
  return (
    <FooterContainer>
      <FooterText />
      <FooterText>
        gustavo@teodoro.dev
      </FooterText>
      <FooterText>
        <a href="https://www.linkedin.com/in/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        {' - '}
        <a href="https://medium.com/@gustavoteodoro" target="_blank" rel="noopener noreferrer">Medium</a>
        {' - '}
        <a href="https://github.com/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Github</a>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
