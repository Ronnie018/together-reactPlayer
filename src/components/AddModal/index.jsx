import { useState, useRef } from 'react';
import StyledAddModal from './styled';

export default function AddModal({ modalToggle }) {
  const [file, setFile] = useState(null);

  const youtubeInput = useRef();
  const fileInput = useRef();
  const fileMask = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleYoutubeChange(e) {
    setFile(() => {
      return {
        isExternal: true,
        origin: 'youtube',
        data: youtubeInput.current.value,
      };
    });
  }

  function setNewMaskValue() {
    const path = fileInput.current.value.split('\\');
    const name = path[path.length - 1];
    fileMask.current.value = name;
  }

  function handleFileChange(e) {
    setFile(() => {
      return {
        isExternal: false,
        origin: 'file',
        data: fileInput.current.files[0],
      };
    });

    setNewMaskValue();
  }

  return (
    <>
      <div
        style={{
          content: '',
          position: 'absolute',
          backgroundColor: '#15001d48',
          top: '0',
          height: '100vh',
          width: '100vw',
        }}
        onClick={() => {
          modalToggle((value) => !value);
        }}
      ></div>
      <StyledAddModal>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <span className='text'>Insert the url here</span>
            <label htmlFor='youtube' className='input-field'>
              <input
                type='text'
                name='youtube'
                id='youtube'
                ref={youtubeInput}
                onChange={handleYoutubeChange}
              />
            </label>
            <label htmlFor='source' className='select-field'>
              <select name='source' id='source'>
                <option value='youtube' defaultValue>
                  youtube
                </option>
                <option value='other' disabled>
                  other
                </option>
              </select>
            </label>
          </div>
          <div className='input-container'>
            <span className='text'>Insert the url here</span>
            <label htmlFor='media' className='input-field'>
              <input
                type='file'
                name='media'
                id='media'
                ref={fileInput}
                onChange={handleFileChange}
              />
              <input
                type='text'
                onPointerUp={(e) => {
                  fileInput.current.click();
                }}
                className='file-mask'
                ref={fileMask}
              />
            </label>
            <label htmlFor='media-type' className='select-field'>
              <select name='media-type' id='media-type'>
                <option value='audio' defaultValue>
                  audio
                </option>
                <option value='video'>video</option>
              </select>
            </label>
          </div>
          <button>Submit</button>
        </form>
      </StyledAddModal>
    </>
  );
}
