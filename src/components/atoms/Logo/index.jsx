import React from 'react';

import {
  LogoContainer,
  LogoText,
  LogoDescription,
} from './style';

function Logo() {
  return (
    <LogoContainer>
      <LogoText>
        gustavo
        <span>teodoro</span>
      </LogoText>
      <LogoDescription>
        web
        {' '}
        <b>engineer</b>
        {' '}
        and multimedia
        {' '}
        <b>producer</b>
      </LogoDescription>
    </LogoContainer>
  );
}

export default Logo;
