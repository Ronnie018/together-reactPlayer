import { useRef } from 'react';
import styled from 'styled-components';
const StDay = styled.div`
  width: 15px;
  background-color: #bd00ff;
  &:hover {
    background-color: #c320ff;
  }
  .value {
    width: 110px;
    height: 30px;
    border-radius: 5px;
    background-color: #741c94;
    color: white;
    position: absolute;
    place-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 2;
  }
`;

const Day = ({ size, day, watcher, setWatcher, id }) => {
  const self = useRef();

  return (
    <StDay
      ref={self}
      style={{
        height: `${size > 200 ? size - 10 : size}px`,
        backgroundColor: watcher === id ? '#c320ff' : '#72009A',
      }}
      onClick={() => {
        setWatcher(id);
      }}
    >
      <div
        className='value'
        style={{
          display: watcher === id ? 'grid' : 'none',
        }}
      >
        {day} songs
      </div>
    </StDay>
  );
};

export default Day;
