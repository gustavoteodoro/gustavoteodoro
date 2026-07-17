import React from 'react';

import {
  LogoContainer,
  LogoText,
  LogoDescription,
  LogoLinks,
} from './style';

function Logo() {
  return (
    <LogoContainer>
      <LogoText>
        Gustavo
        <span>Teodoro</span>
        {' '}
        🧑‍💻
      </LogoText>
      <LogoLinks>
        <a href="https://drive.proton.me/urls/PQM09KF534#IXkF0HAQC0wg" rel="noreferrer" target="_blank">Curriculum</a>
        {' | '}
        <a href="https://www.linkedin.com/in/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        {' | '}
        <a href="https://medium.com/@gustavoteodoro" target="_blank" rel="noopener noreferrer">Medium</a>
        {' | '}
        <a href="https://github.com/gustavoteodoro/" target="_blank" rel="noopener noreferrer">Github</a>
        <br />
        <a href="mailto:gustavo@teodoro.dev">gustavo@teodoro.dev</a>
      </LogoLinks>
      <LogoDescription>
        Frontend Engineer since 2009. Design Systems and Accessibility specialist.
      </LogoDescription>
      <LogoDescription>
        Staff Frontend Engineer and Frontend Platform Navigator @
        {' '}
        <a href="https://www.thinkific.com/" target="_blank" rel="noopener noreferrer">Thinkific</a>
        .
      </LogoDescription>
      <LogoDescription>
        Participant in the
        {' '}
        <a href="https://www.w3.org/community/design-tokens/" target="_blank" rel="noopener noreferrer">Design Tokens Community Group @ W3</a>
        .
      </LogoDescription>
      <LogoDescription>
        Professional Member @
        {' '}
        <a href="https://www.accessibilityassociation.org/" target="_blank" rel="noopener noreferrer">International Association of Accessibility Professionals</a>
        .
      </LogoDescription>
      <LogoDescription>
        Based in Vancouver, British Columbia - Canada.
      </LogoDescription>
    </LogoContainer>
  );
}

export default Logo;
