import React from 'react';

import {
  FooterContainer,
  FooterText,
} from './style';

function Footer() {
  return (
    <FooterContainer>
      <FooterText />
      <FooterText />
      <FooterText>
        <a href="https://www.linkedin.com/in/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        {' - '}
        <a href="https://github.com/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Github</a>
        {' - '}
        <a href="https://soundcloud.com/escutegustavo" target="_blank" rel="noopener noreferrer">Soundcloud</a>
        {' - '}
        <a href="https://www.last.fm/user/gustavoteo" target="_blank" rel="noopener noreferrer">Last.fm</a>
      </FooterText>

    </FooterContainer>
  );
}

export default Footer;
