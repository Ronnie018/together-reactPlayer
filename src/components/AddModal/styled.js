import styled from 'styled-components';

const StyledAddModal = styled.div`
  margin: auto;
  height: 500px;
  width: 700px;
  max-width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #15001d;
  z-index: 100;
  color: white;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    width: 450px;
    max-width: 90%;
    .input-container {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;
      .text {
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 0.5px;
      }
      .input-field {
        #media {
          display: none;
        }
        input[type='text'] {
          border-radius: 3px;
          height: 2rem;
          width: 100%;
          color: #15001d;
        }
      }
      .select-field {
        select {
          background-color: #15001dc9;
          width: 100px;
          height: 1.5rem;
        }
      }
    }
    .disabled {
      opacity: 50%;
      position: relative;
      overflow: hidden;
      ::after {
        content: 'this option is not implemented yet.';
        position: absolute;
        background-color: #72009a;
        color: white;
        position: absolute;
        width: 300px;
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 1px 1px 5px #f5f5f555;
        height: 50px;
        left: 0;
        right: 0;
        top: 0;
        margin: auto;
        bottom: -300px;
        transition: 200ms ease-in-out;
      }
      &:hover {
        &::after {
          bottom: 0;
        }
        &::before {
          transition: 200ms ease-in-out;
          content: '';
          height: 100%;
          width: 100%;
          background-color: #49006335;
          position: absolute;
        }
      }
    }
    button {
      width: 8rem;
      height: 2.7rem;
      background-color: #72009a;
      text-align: left;
      display: flex;
      align-items: center;
      padding: 1rem;
      font-weight: 500;
      margin: auto;
      border-radius: 4px;
    }
  }
`;

export default StyledAddModal;
