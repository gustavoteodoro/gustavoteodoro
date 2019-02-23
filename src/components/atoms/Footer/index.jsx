import React from 'react';

import {
  FooterContainer,
  FooterText,
} from './style';

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        If you are looking for my CV and the companies that I've worked for, you can go to my
        {' '}
        <a href="https://www.linkedin.com/in/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Linkedin profile</a>
      </FooterText>
      <FooterText>
        Ah, okay... maybe you are looking for a sample of my codes? You can go to my
        {' '}
        <a href="https://github.com/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Github profile</a>
      </FooterText>
      <FooterText>
        But if you are just looking for some good amateur music, go to my
        {' '}
        <a href="https://soundcloud.com/escutegustavo" target="_blank" rel="noopener noreferrer">Soundcloud</a>
      </FooterText>

    </FooterContainer>
  );
}

export default Footer;
