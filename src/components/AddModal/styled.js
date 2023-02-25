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
