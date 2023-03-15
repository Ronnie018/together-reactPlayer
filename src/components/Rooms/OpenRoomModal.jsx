import { useState } from 'react';
import styled from 'styled-components';
import ModalHeader from './ModalHeader';

const StyledOpenRoomModal = styled.div`
  width: 700px;
  height: 400px;
  max-width: 96%;
  background-color: #15001d;
  z-index: 100;
  &,
  * {
    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .content {
    margin: auto;
    width: max-content;
    display: flex;
    max-width: 100%;
    column-gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1rem;
    input {
      flex: 1 1 250px;
      height: 50px;
      max-width: 92vw;
      border-radius: 5px;
      font-size: 2rem;
      line-height: 2rem;
      padding-top: 1rem;
      caret-color: transparent;
      color: #bd00ff;
      font-weight: 900;
      ::selection {
        background-color: transparent;
        color: #0e0014;
      }
      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: none;
        text-indent: 1rem;
        transform: scale(1.01, 1.03);
      }
    }
    .join-button {
      height: 46px;
      border-radius: 5px;
      width: 100px;
      background-color: #a800e3;
      color: white;
      font-weight: 800;
      font-size: 1.3rem;
      &:hover {
        transition: 900ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: translateY(-1px);
        box-shadow: 0px 1px 5px #000000;
      }
      &:active {
        transition: 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: translateY(2px);
      }
    }
  }
`;

const OpenRoomModal = ({ room, setRoom }) => {
  const [text, setText] = useState('');

  function handleInputChange(e) {
    let text = e.target.value;
    setText(() => text);
    e.target.value = '*'.repeat(text.length);
  }

  return (
    <>
      <div
        className='modal-overlay'
        onClick={() => {
          setRoom(() => null);
        }}
      />
      <StyledOpenRoomModal className='abs-center'>
        <ModalHeader>{room.name}</ModalHeader>
        <div className='content'>
          <input type='text' onChange={handleInputChange} />
          <button className='join-button'>Join</button>
        </div>
      </StyledOpenRoomModal>
    </>
  );
};

export default OpenRoomModal;
