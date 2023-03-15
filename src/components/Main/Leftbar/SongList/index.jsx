import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import SongTag from '../SongTag';
import AddSong from '../SongTag/AddSong';
import { SongListContext as context } from '../../../../Pages/Main';
import AddModal from '../../AddModal';

const StyledSongList = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  .songs {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    padding-right: 0.8rem;
  }
`;

const SongList = () => {
  const [isModalOpen, modalToggle] = useState(false);
  const SongListContext = useContext(context);

  return (
    <StyledSongList>
      <div className='songs'>
        {SongListContext.SongList.map(({ name, url, ID }) => {
          return <SongTag name={name} url={url} songId={ID} key={ID} />;
        })}
      </div>
      <AddSong modalToggle={modalToggle} />
      {isModalOpen && <AddModal modalToggle={modalToggle} />}
    </StyledSongList>
  );
};

export default SongList;
