import { GrPlayFill, MdHideSource, MdDelete } from 'react-icons/all';
import { useState } from 'react';
import { StyledSongTag } from './styled';
import styled from 'styled-components';

const StyledMenu = styled.div`
  width: 50px;
  height: 100%;
  animation: surgir;
  transition: 1000ms ease-in-out;
  transform: translateX(30px);
  .opt-btn {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    .icon {
      fill: #f5dbff;
      &:hover {
        fill: #d978ff;
      }
    }
  }
`;

const Menu = ({ nome, songId }) => {
  return (
    <StyledMenu className='menu-elm'>
      <div className='opt-btn'>
        <MdHideSource size={20} className='icon' />
        <MdDelete size={20} className='icon' />
      </div>
    </StyledMenu>
  );
};

const SongTag = ({ name, url, songId }) => {
  const [menu, setMenu] = useState(false);
  return (
    <StyledSongTag>
      <div
        className='song-name'
        onPointerOver={(e) => {
          setMenu(true);
        }}
        onMouseLeave={(e) => {
          setMenu(false);
        }}
      >
        <div className='text'>{name}</div> {menu && <Menu songId={songId} />}
      </div>
      <div className='play-btn'>
        <GrPlayFill className='icon' />
      </div>
    </StyledSongTag>
  );
};

export default SongTag;
