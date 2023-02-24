import StyledMain from './styled';
import Leftbar from '../../components/Leftbar';
import Player from '../../components/Player';
import { useState } from 'react';
import { createContext } from 'react';

export const SongListContext = createContext(null);

const Main = ({}) => {
  const [SongList, SetSongList] = useState([
    { name: 'song Name', url: 'songUrl', ID: '123' },
    { name: 'song Name', url: 'songUrl', ID: '321' },
    { name: 'song Name', url: 'songUrl', ID: '333' },
    { name: 'song Name', url: 'songUrl', ID: '353' },
    { name: 'song Name', url: 'songUrl', ID: '38a' },
  ]);
  const [currentSong, setCurrentSong] = useState({
    name: 'Song Name',
    url: 'songUrl',
    ID: '123',
  });
  return (
    <SongListContext.Provider
      value={{ SetSongList, SongList, currentSong, setCurrentSong }}
    >
      <StyledMain className='main outline outline-2 outline-green-500 w-full min-h-screen flex flex-wrap'>
        <Leftbar />
        <Player />
      </StyledMain>
    </SongListContext.Provider>
  );
};

export default Main;
