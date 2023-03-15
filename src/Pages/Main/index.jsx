import { useState, createContext, useEffect, useContext,  } from 'react';
import StyledMain from './styled';
import Leftbar from '../../components/Main/Leftbar';
import Player from '../../components/Main/Player';
import { AppContext } from '../../App';
import { Navigate } from 'react-router-dom';

export const SongListContext = createContext(null);

const Main = () => {
  const {currentUser} = useContext(AppContext);
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
      {!currentUser && <Navigate to='/login' />}
      <StyledMain className='main outline outline-2 outline-green-500 w-full min-h-screen flex flex-wrap'>
        <Leftbar />
        <Player />
      </StyledMain>
    </SongListContext.Provider>
  );
};

export default Main;
