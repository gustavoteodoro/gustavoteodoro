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
        gustavo@teodoro.dev
      </FooterText>
      <FooterText>
        <a href="https://www.linkedin.com/in/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        {' - '}
        <a href="https://medium.com/@gustavoteodoro" target="_blank" rel="noopener noreferrer">Medium</a>
        {' - '}
        <a href="https://github.com/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Github</a>
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
