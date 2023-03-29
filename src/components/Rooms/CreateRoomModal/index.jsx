import { useRef, useState, useContext } from 'react';
import useCurrentUserData from '../../Global/useCurrentUserData';
import ModalHeader from '../ModalHeader';
import genres from '../../Global/genres.json';
import { ItemTag } from '../../Global/Tag';
import StyledCreateRoomModal from './styled';
import { AppContext } from '../../../App';
import gun, { rooms } from '../../../gun';
import { Navigate } from 'react-router-dom';
import { profiles } from '../../../gun';

const CreateRoomModal = ({ toggle }) => {
  const [roomCreated, setRoomCreated] = useState(false);
  const { currentUser } = useContext(AppContext);
  const currentUserData = useCurrentUserData(currentUser);
  const roomNameInput = useRef();
  const passwordInput = useRef();
  const searchInput = useRef();
  const searchInputOption = useRef();

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [keywordList, setKeywordList] = useState([]);

  function getMatchedGenres(str) {
    if (selectedGenres.length === 5 || str === '') {
      setKeywordList(() => []);
      return;
    }
    const list = Object.keys(genres).filter((key) => {
      return (
        key.toLowerCase().includes(str.toLowerCase()) && // matches criteria
        str !== '' && // not empty
        selectedGenres.indexOf(key) === -1 // not already selected
      );
    });
    setKeywordList(() => list);
  }

  function handleKeywordChange(e) {
    const { value } = e.target;
    getMatchedGenres(value);
  }

  function handleDropdownClick(e) {
    if (selectedGenres.length === 5) {
      return;
    }
    const { value } = e.target;
    searchInput.current.value = '';
    setSelectedGenres((state) => [...state, value]);
    setKeywordList(() => []);
  }

  function handleCreateRoom(e) {
    e.preventDefault();
    try {
      const roomName = roomNameInput.current.value;
      const password = passwordInput.current.value;
      const room = createRoomObject(roomName, selectedGenres, currentUserData);
      const stringfied = {
        room: JSON.stringify(room),
      };
      createRoom(stringfied, room.id, (id) => {
        saveRoomInLocalStorage({ password, id });
        setRoomCreated({ id });
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {roomCreated && <Navigate to={`/room/${roomCreated.id}`} />}
      <div
        className='modal-overlay'
        onClick={() => {
          toggle((value) => !value);
        }}
      />
      <StyledCreateRoomModal className='abs-center'>
        <ModalHeader distance={2}>Create Room</ModalHeader>
        <div className='content'>
          <label htmlFor='room-name' className='input-container'>
            <span>Room Name</span>
            <input type='text' id='room-name' ref={roomNameInput} />
          </label>
          <label htmlFor='password' className='input-container'>
            <span>Password</span>
            <input type='password' id='password' ref={passwordInput} />
          </label>
          <div className='input-container'>
            <span>Categories</span>
            <div className='genres-list'>
              <input
                type='text'
                placeholder='write a genre and click to select'
                onChange={handleKeywordChange}
                ref={searchInput}
              />
              <div className='dropdown'>
                {keywordList.length > 0 &&
                  keywordList.map((keyword) => (
                    <label htmlFor={keyword} key={keyword}>
                      <span>{keyword}</span>
                      <input
                        id={keyword}
                        type='checkbox'
                        value={keyword}
                        ref={searchInputOption}
                        style={{
                          display: 'none',
                        }}
                        onChange={handleDropdownClick}
                      />
                    </label>
                  ))}
              </div>
              {selectedGenres.length > 0 &&
                selectedGenres.map((genre, i) => {
                  return (
                    <ItemTag
                      children={genre}
                      key={i}
                      updateSelf={setSelectedGenres}
                    />
                  );
                })}
            </div>
            <button
              className='create-btn'
              type='button'
              onClick={handleCreateRoom}
            >
              Create
            </button>
          </div>
        </div>
      </StyledCreateRoomModal>
    </>
  );
};

export default CreateRoomModal;

function createRoomObject(roomName, selectedGenres, owner) {
  if (!owner || !owner.id || !roomName)
    throw new Error('mandatory fields missing');
  const room = {
    roomName,
    categories: selectedGenres,
    id: crypto.randomUUID(),
    owner: {
      name: owner.username,
      id: owner.id,
      image: owner.images.image,
    },
    users: [],
    messages: [],
    songs: [],
    currentSong: [],
    isPrivate: false,
  };
  return room;
}

function createRoom(room, id, cb) {
  rooms.get(id).put(room);
  cb(crypto.randomUUID()); // another id to be used as a secret
}

function saveRoomInLocalStorage({ password, id }) {
  localStorage.setItem('roomPassword', password);
  localStorage.setItem('roomId', id);
}
