import styled from 'styled-components';
import { useRef, useState } from 'react';
import SongList from './SongList';
import Logo from './Logo';

const StyledLeftbar = styled.div`
  width: 300px;
  min-height: 100vh;
  background-color: purple;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    182.97deg,
    #9f00d7 -23.56%,
    rgba(148, 40, 186, 0.932405) 51.83%,
    rgba(22, 22, 22, 0) 97.53%
  );
  box-shadow: 7px -204px 69px -1px #530070;
`;

const Leftbar = (props) => {
  return (
    <StyledLeftbar className='left-bar'>
      <Logo />
      <SongList />
    </StyledLeftbar>
  );
};

export default Leftbar;
