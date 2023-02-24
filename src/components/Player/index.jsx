import { useContext } from 'react';
import styled from 'styled-components';
import { SongListContext as context } from '../../Pages/Main';
import Chat from '../Chat';
import { SlOptionsVertical } from 'react-icons/all';

const StyledPlayer = styled.div`
  flex: 1 1 300px;
  .top-bar {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    .song-name {
      color: #bd32ee;
      font-weight: 600;
      font-size: 1.7rem;
      text-shadow: -7px 10px 7px rgba(156, 156, 156, 0.18);
    }
  }
  .middle {
    display: flex;
    justify-content: flex-end;
    padding: 0 5rem;
  }
`;

const Player = () => {
  const SongListContext = useContext(context);
  console.log(SongListContext);
  return (
    <StyledPlayer>
      <div className='top-bar'>
        <div className='song-name'>{SongListContext.currentSong.name}</div>
        <div className='options'>
          <SlOptionsVertical
            color='#bd32ee'
            fill='#bd32ee'
            stroke='#bd32ee'
            size={20}
          />
        </div>
      </div>
      <div className='middle'>
        <Chat />
      </div>
    </StyledPlayer>
  );
};

export default Player;
