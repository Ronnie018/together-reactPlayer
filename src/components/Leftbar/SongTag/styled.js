import styled from 'styled-components';

export const StyledSongTag = styled.div`
  background: #0c0010c9;
  box-shadow: 0px 4px 4px #0000003f;
  backdrop-filter: blur(5px);
  display: grid;
  grid-template-columns: 75% 25%;
  width: 100%;
  height: 50px;
  transition: 100ms ease-in-out;
  &:hover {
    background: #1a0023dd;
    box-shadow: 0px 4px 4px #1616163e;
  }
  .song-name {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    .text {
      color: #ffffff;
      height: 100%;
      display: flex;
      font-weight: 300;
      align-items: center;
    }
    .menu-elm {
      animation: appear ease-in-out 150ms;
      @keyframes appear {
        from {
          opacity: 0;
          transform: translateX(-60px);
        }
        to {
          opacity: 100%;
          transform: translateX(30px);
        }
      }
    }
  }
  .play-btn {
    height: 100%;
    display: grid;
    place-items: center;
    transition: 100ms ease-in-out;
    &:hover {
      background-color: #2c003c;
    }
    &:active {
      transform: scale(0.99);
    }
    .icon {
      width: 30px;
      height: 20px;
      & > path {
        stroke: #a800e3;
        box-shadow: 0 0 10px #2c003c;
      }
      &:hover {
        & > path {
          stroke: #bf32f3;
          box-shadow: 0 0 10px #ebb3ff;
          transform: scale(1.05);
        }
      }
      &:active {
        & > path {
          stroke: #67008c;
          box-shadow: 1px 1px 10px #ebb3ff;
        }
      }
    }
  }
`;
