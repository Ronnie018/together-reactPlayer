import styled from 'styled-components';
import { GrAdd } from 'react-icons/gr';
import { useRef } from 'react';

const StyledAddSong = styled.div`
  // first is ratio
  background: radial-gradient(
    80.64% 101.21% at 5% -50%,
    rgba(239, 239, 239, 0.1) 0%,
    rgb(0, 0, 0) 100%
  );
  box-shadow: 0px 4px 4px #0000003f;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 75% 25%;
  &:hover {
    background-color: #0c0010d9;
  }
  .text {
    color: #c2c2c2;
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
  }
  .add-btn {
    height: 100%;
    display: grid;
    place-items: center;
    transition: 100ms ease-in-out;
    &:hover {
      background-color: #2c003c;
      .icon {
        & > path {
          stroke: #bf32f3;
          box-shadow: 0 0 10px #ebb3ff;
        }
      }
    }
    &:active {
      transform: scale(0.98);
      stroke: #67008c;

      box-shadow: 1px 1px 3px #17002037 inset;
    }
    .icon {
      width: 30px;
      height: 20px;
      & > path {
        stroke: #a800e3;
        box-shadow: 0 0 10px #2c003c;
      }
    }
  }
`;

const AddSong = (props) => {
  const self = useRef();

  function handleMouseMove(e) {
    const size = e.clientX / 4 + 5;
    self.current.style.background = `
      radial-gradient(80.64% 101.21% at ${size}% -50%, rgba(239, 239, 239, 0.10) 0%,#000 100%)
    `;
  }

  return (
    <StyledAddSong onMouseMove={handleMouseMove} ref={self}>
      <div className='text'>Add New Song</div>
      <div className='add-btn'>
        <GrAdd className='icon' />
      </div>
    </StyledAddSong>
  );
};

export default AddSong;
