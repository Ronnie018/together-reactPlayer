import { useContext } from 'react';
import styled from 'styled-components';
import { SongListContext as context } from '../../../Pages/Main';
import Chat from './Chat';
import Control from './Control';
import { SlOptionsVertical } from 'react-icons/all';

const StyledPlayer = styled.div`
  flex: 1 1 300px;
  .top-bar {
    .song-name {
      color: #bd32ee;
      text-shadow: -7px 10px 7px rgba(156, 156, 156, 0.18);
    }
  }
  .middle {
    //
  }
`;

const Player = () => {
  const SongListContext = useContext(context);
  return (
    <StyledPlayer className='max-w-full flex flex-col justify-between'>
      <div>
        <div className='top-bar flex justify-between h-20 px-8 py-6 align-middle max-w-full'>
          <div className='song-name font-semibold text-2xl'>
            {SongListContext.currentSong.name}
          </div>
          <div className='options grid place-items-center'>
            <SlOptionsVertical
              color='#bd32ee'
              fill='#bd32ee'
              stroke='#bd32ee'
              size={20}
            />
          </div>
        </div>
        <div className='middle flex justify-end px-20'>
          <Chat />
        </div>
      </div>
      <div className='bottom'>
        <Control />
      </div>
    </StyledPlayer>
  );
};

export default Player;
