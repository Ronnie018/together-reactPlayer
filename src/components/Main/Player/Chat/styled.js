import styled from 'styled-components';

export const StyledMessage = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 3fr;
  grid-column-gap: 0.1rem;
  height: max-content;
  max-width: 100%;
  .item {
    flex: 1 1 20px;
    font-size: 15px;
    font-weight: 500;
  }
  .side {
    display: flex;
    flex-direction: column;
    height: 100%;
    .item {
      color: #505050;
    }
    .time {
      font-size: 13px;
      color: #4e4e4e78;
    }
  }
  .right {
    .item {
      color: #d7d7d7;
      font-weight: 200;
    }
  }
`;

export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  flex: 0 1 240px;
  min-width: 350px;
  height: 300px;
  justify-content: space-between;
  &:hover {
    outline: 1px solid #00000077;
  }

  .messages {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  .chat-input {
    label {
      display: grid;
      grid-template-columns: 4fr 1fr;
      grid-column-gap: 1rem;
      animation: 400ms appear;
      @keyframes appear {
        from {
          opacity: 50%;
        }
        to {
          opacity: 100%;
        }
      }
      input {
        background-color: white;
        border-radius: 2px;
        text-indent: 1rem;
        &:focus,
        &:focus-visible,
        &:focus-within {
          outline: none;
          transform: scaleX(1.01) scaleY(1.04);
        }
      }
      button {
        color: white;
        font-weight: 400;
        height: 30px;
        border-radius: 2px;
        &:focus,
        &:focus-visible,
        &:focus-within {
          outline: none;
          transform: scaleX(1.02) scaleY(1.04);
        }
      }
    }
  }
`;
