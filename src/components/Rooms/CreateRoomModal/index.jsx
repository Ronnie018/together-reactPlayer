import { useRef, useState, useContext } from 'react';
import ModalHeader from '../ModalHeader';
import genres from '../../Global/genres.json';
import { ItemTag } from '../../Global/Tag';
import StyledCreateRoomModal from './styled';
import { AppContext } from '../../../App';
import { rooms } from '../../../gun';
import { Navigate } from 'react-router-dom';

const CreateRoomModal = ({ toggle }) => {
  const [roomCreated, setRoomCreated] = useState(false);
  const { currentUser } = useContext(AppContext);
  const roomNameInput = useRef();
  const passwordInput = useRef();
  const searchInput = useRef();

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [keywordList, setKeywordList] = useState([]);

  function getMatchedGenres(str) {
    if (selectedGenres.length === 5) {
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
    const { value } = e.target;
    setSelectedGenres((state) => [...state, value]);
    searchInput.current.value = '';
    setKeywordList(() => []);
  }

  function handleCreateRoom(e) {
    e.preventDefault();
    const roomName = roomNameInput.current.value;
    const password = passwordInput.current.value;
    const room = createRoomObject(
      roomName,
      password,
      selectedGenres,
      currentUser
    );
    const stringfied = {
      room: JSON.stringify(room),
    };
    createRoom(stringfied, room.id, (id) => {
      saveRoomPasswordInLocalStorage(password);
      setRoomCreated({ id });
    });
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
              />
              <div className='dropdown'>
                {keywordList.length > 0 &&
                  keywordList.map((keyword) => (
                    <label htmlFor={keyword}>
                      <span>{keyword}</span>
                      <input
                        id={keyword}
                        type='checkbox'
                        key={keyword}
                        value={keyword}
                        ref={searchInput}
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
  const room = {
    roomName,
    selectedGenres: selectedGenres,
    id: crypto.randomUUID(),
    owner,
    users: [],
    messages: [],
    songs: [],
    currentSong: [],
    verified: false,
  };
  return room;
}

function createRoom(room, id, cb) {
  console.log('room, is', room);
  rooms.get(id).put(room);
  cb(id);
}

function saveRoomPasswordInLocalStorage(password) {
  localStorage.setItem('roomPassword', password);
}
