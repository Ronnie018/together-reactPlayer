import styled from 'styled-components';

const StyledControl = styled.div`
  max-width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  &,
  * {
    transition: 200ms ease-in-out;
  }
  .controls {
    width: max-content;
    margin: 0 auto;
    .items {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      column-gap: 1.85rem;
      &:hover {
        .item {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(189, 0, 255, 0.43) 0%,
            rgba(189, 0, 255, 0.3053) 100%
          );
          box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.54);
          .icon {
            display: grid;
            place-items: center;
            * {
              box-shadow: 0px 4px 4px;
            }
          }
        }
      }
      .item {
        background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(189, 0, 255, 0.72) 0%,
          rgba(189, 0, 255, 0.0288) 100%
        );
        border-radius: 25px;
        width: 55px;
        height: 55px;
        display: grid;
        place-items: center;
        .icon {
          display: none;
          path {
            stroke: #a800e3;
            color: #a800e3;
            fill: #a800e3;
          }
        }
        &:hover {
          background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(187, 0, 255, 0.523) 0%,
            rgba(187, 0, 255, 0.423) 100%
          );
        }
      }
      .play {
        width: 75px;
        height: 75px;
        padding-left: 0.3rem; // corrects icon alignement to center of button
      }
    }
  }
  .progressbar {
    min-height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    row-gap: 0.5rem;
    * {
      transition: none;
    }
    &:hover {
      .progress-time {
        color: #c8c8c8;
      }

      .bar {
        background-color: #620085;
        .fill {
          background-color: #bd00ff;
        }
        .after {
          background-color: #8a00bc;
        }
      }
    }
    .progress-time {
      display: flex;
      justify-content: end;
      color: #c8c8c88b;
      width: 100%;
      padding: 0 3.5rem;
      font-size: 14px;
    }
    .bar {
      width: 95%;
      height: 2px;
      background-color: #6200858e;
      cursor: pointer;
      position: relative;
      &:hover {
        height: 8px;
      }
      .fill {
        width: 60%;
        height: 100%;
        background-color: #bb00ff63;
        z-index: 10;
        position: absolute;
      }
      .after {
        background-color: #8a00bc69;
        height: 100%;
        width: 5px;
        position: absolute;
        border-right: 3px solid #2e003f;
      }
    }
  }
`;

export default StyledControl;
