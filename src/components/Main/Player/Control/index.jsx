import { useContext, useRef } from 'react';
import { SongListContext as context } from '../../../../Pages/Main';
import StyledControl from './styled';

import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySharp,
} from 'react-icons/io5';

const Control = () => {
  const after = useRef();
  const fill = useRef();
  const SongListContext = useContext(context);

  function resizeHelper(x) {
    after.current.style.width = `${x}px`;
  }

  function changeCurrentTime(e) {
    return;
  }
  function changeBarCurrentSize(e) {
    fill.current.style.width = after.current.style.width;
  }

  function handleClick(e) {
    changeBarCurrentSize();
    changeCurrentTime(e);
  }

  return (
    <StyledControl>
      <div className='controls'>
        <div className='items'>
          <div className='item back'>
            <IoPlayBackSharp className='icon' size={25} />
          </div>
          <div className='item play'>
            <IoPlaySharp className='icon' size={30} />
          </div>
          <div className='item forward'>
            <IoPlayForwardSharp className='icon' size={25} />
          </div>
        </div>
      </div>
      <div className='progressbar'>
        <div className='progress-time'>
          <span>8:00</span>
        </div>
        <div
          className='bar'
          onMouseMove={(e) => {
            const rect = e.target.getBoundingClientRect();
            resizeHelper(e.clientX - rect.left);
          }}
          onMouseLeave={() => {
            resizeHelper(0);
          }}
          onClick={handleClick}
        >
          <div className='after' ref={after} />
          <div className='fill' ref={fill} />
        </div>
      </div>
    </StyledControl>
  );
};

export default Control;
