import styled from 'styled-components';

export const StyledInput = styled.input`
  caret-color: #72009a;
  height: 50px;
  background: #e7a4ff;
  border-radius: 15px;
  text-indent: 1rem;
  width: 100%;
  background: #e7a4ff;
  box-shadow: inset 2px 2px 3px #8a00bb;
  border-radius: 15px;
  color: #72009a;
  font-weight: 500;
  font-size: 1.2rem;
  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: none;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25), inset -2px -2px 0px #bd32ee;
    transform: translate(-2px, -2px);
  }
`;

export const StyledLoginForm = styled.div`
  @keyframes surge {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  width: 400px;
  max-width: 96%;
  min-height: min(400px, 90%);
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  padding: 2rem 1rem;
  animation: surge 500ms cubic-bezier(0.175, 0.885, 0.5, 1);
  &,
  * {
    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .header {
    background-color: #72009a;
    color: white;
    padding: 0.6rem 3rem;
    min-width: max-content;
    width: 220px;
    font-size: 2.2rem;
    font-weight: 600;
    transform: translateX(-60px);
    margin-bottom: 3rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.4rem;
    .input-label {
      width: 100%;
      display: block;
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      position: relative;
      .message {
        position: absolute;
        bottom: -18px;
        left: 0;
        background-color: #e1b3e699;
      }
      span {
        position: absolute;
        font-weight: 600;
        font-size: 1.2rem;
        z-index: 10;
        text-indent: 0.8rem;
        color: #72009a;
      }
      &.focus {
        span {
          position: initial;
          text-indent: 0.6rem;
        }
      }
      &.text {
        span {
          display: none;
        }
      }
    }

    .toggle-link {
      width: max-content;
      margin: auto;
      font-size: 1rem;
      &:hover {
        color: #72009a;
      }
    }
  }
`;

export const StyledButton = styled.button`
  background-color: #72009a;
  background: #72009a;
  box-shadow: 2px 2px 8px 1px rgba(189, 0, 255, 0.71);
  border-radius: 15px;
  font-size: 1.2rem;
  color: white;
  width: 100px;
  height: 46px;
  font-weight: 600;
  margin: auto;
  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: none;
  }
  &:hover {
    background-color: #8308b0;
  }
  &:active {
    box-shadow: inset 2px 2px 3px #8219a9;
    transform: translate(2px, 2px);
  }
`;
