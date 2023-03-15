import SearchBar from '../../components/Rooms/SearchBar';
import { useContext, useState } from 'react';
import StyledRooms from './styled';
import genres from '../../components/Global/genres.json';
import { ItemTag } from '../../components/Global/Tag';
import roomsList from './rooms';
import RoomItem from '../../components/Rooms/RoomItem';
import OpenRoomModal from '../../components/Rooms/OpenRoomModal';
import CreateRoomModal from '../../components/Rooms/CreateRoomModal';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../App';

const Rooms = () => {
  const {currentUser} = useContext(AppContext);
  const [query, setQuery] = useState({
    search_string: '',
    filters: [],
    default: true,
  });


  const [selection, setSelection] = useState([...Object.keys(genres)]);
  const [selected, setSelected] = useState([]);

  const [rooms, setRooms] = useState(roomsList);

  const [openRoom, setOpenRoom] = useState(null);
  const [createRoom, createRoomToggle] = useState(false);

  return (
    <>
      {!currentUser && <Navigate to='/login' />}
      <StyledRooms>
        {openRoom && <OpenRoomModal room={openRoom} setRoom={setOpenRoom} />}
        {createRoom && <CreateRoomModal toggle={createRoomToggle} />}
        <div className='container'>
          <div className='search-container'>
            <SearchBar query={setQuery} />
            <div className='filters'>
              <div className='genres-list'>
                {selection.map((genre, i) => {
                  return (
                    <ItemTag
                      key={i}
                      color={genres[genre]}
                      updateList={setSelected}
                      updateSelf={setSelection}
                    >
                      {genre}
                    </ItemTag>
                  );
                })}
              </div>
              <div className='genres-list'>
                {selected.map((genre, i) => {
                  return (
                    <ItemTag
                      key={i}
                      color={genres[genre]}
                      updateList={setSelection}
                      updateSelf={setSelected}
                    >
                      {genre}
                    </ItemTag>
                  );
                })}
                {!selected.length > 0 && (
                  <span>click on a genre to select</span>
                )}
              </div>
            </div>
          </div>
          <div className='rooms-container'>
            <div className='header-container'>
              <div className='header'>Rooms hub</div>
              <button
                className='create-btn'
                onClick={(e) => {
                  createRoomToggle((value) => !value);
                }}
              >
                Create
              </button>
            </div>
            <div className='rooms'>
              {rooms.map((room, i) => {
                return (
                  <RoomItem setOpenRoom={setOpenRoom} children={room} key={i} />
                );
              })}
            </div>
          </div>
        </div>
      </StyledRooms>
    </>
  );
};

export default Rooms;
