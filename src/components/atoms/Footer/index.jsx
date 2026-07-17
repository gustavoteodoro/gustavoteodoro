import React from 'react';

import {
  CarbonContainer,
  FooterContainer,
  FooterText,
} from './style';

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Code is poetry.
      </FooterText>
      <FooterText>
        <a href="https://drive.proton.me/urls/FPR90SSS9M#f4TQiaxxUpeU" rel="noreferrer" target="_blank">Curriculum</a>
        {' | '}
        <a href="https://www.linkedin.com/in/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        {' | '}
        <a href="https://medium.com/@gustavoteodoro" target="_blank" rel="noopener noreferrer">Medium</a>
        {' | '}
        <a href="https://github.com/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Github</a>
        {' | '}
        <a href="mailto:gustavo@teodoro.dev">gustavo@teodoro.dev</a>
      </FooterText>
      <CarbonContainer>
        <FooterText>
          This web page achieves a
          {' '}
          <a href="https://www.websitecarbon.com/website/teodoro-dev/" target="_blank" rel="noopener noreferrer">carbon rating of A+</a>
          .
        </FooterText>
        <FooterText>
          This is cleaner than 97 % of all web pages globally.
        </FooterText>
      </CarbonContainer>
    </FooterContainer>
  );
}

export default Footer;
