import styled from 'styled-components';

const StyledCreateRoomModal = styled.div`
  position: absolute;
  max-width: 96%;
  margin: auto;
  background-color: #15001d;
  z-index: 100;
  width: 400px;
  height: 550px;
  &,
  * {
    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .content {
    .input-container {
      max-width: 100%;
      width: 320px;
      display: flex;
      flex-direction: column;
      margin: 1rem auto;
      span {
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: white;
      }
      input {
        height: 26px;
        border-radius: 4px;
        background-color: #f4f4f4;
        text-indent: 0.7rem;
        &:focus,
        &:focus-visible,
        &:focus-within {
          transform: scale(1.01, 1.06);
        }
      }
      .genres-list {
        position: relative;
        padding: 0.6rem;
        background-color: #230030;
        width: min(100%, 340px);
        max-height: 210px;
        min-height: 50px;
        filter: drop-shadow(0px 4px 4px #060606);
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        row-gap: 0.2rem;
        column-gap: 0.2rem;
        margin-bottom: 1rem;
        color: white;
        ::-webkit-scrollbar {
          width: 0px;
        }
        input {
          background-color: #15001d;
          text-indent: 0.6rem;
          width: 100%;
          ::placeholder {
            color: #dddddd;
            font-size: 0.8rem;
          }
        }
        .dropdown {
          position: absolute;
          display: flex;
          flex-direction: column;
          bottom: -100%;
          background-color: #230030;
          font-weight: 300;
          font-family: 'Roboto', sans-serif;
          &::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 10px solid transparent;
            border-top-color: #230030;
            background-color: #dddddd;
          }
        }
      }
    }
    .create-btn {
      background-color: #bd00ff;
      width: 100px;
      height: 36px;
      border-radius: 4px;
      margin: 1rem auto;
      color: white;
    }
  }
`;

export default StyledCreateRoomModal;
