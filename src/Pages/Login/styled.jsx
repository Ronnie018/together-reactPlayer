import styled from 'styled-components';

const StyledLogin = styled.div`
  background-color: #150014;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 3rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    align-items: center;
    .left {
      margin: 0 auto;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 3rem;
      .image-wrapper {
        width: min(700px, 90%);
        margin: 0 auto;
      }
      .text {
        width: min(600px, 90%);
        margin: 0 auto;
        color: white;
        font-size: 4rem;
        font-weight: 500;
        min-height: 200px;
        padding-left: 3rem;
        position: relative;
        &::before {
          content: '';
          height: 100%;
          width: 12px;
          left: 0;
          background-color: #bd32ee;
          position: absolute;
        }
      }
    }
    .right {
      margin: 0 auto;
      max-width: 100%;
      display: flex;
      align-items: center;
    }
    @media (max-width: 500px) {
      padding: 0.5rem;
      grid-row-gap: 2rem;
      .left {
        flex-direction: column-reverse;
        row-gap: 1rem;
        .text {
          font-size: 3rem;
          padding-left: 2rem;
        }
      }
    }
    @media (max-height: 700px) {
      padding: 1rem;
      .left {
        .image-wrapper {
          width: min(500px, 90%);
          margin: 0 auto;
        }
        .text {
          font-size: 3.5rem;
          padding-left: 3rem;
        }
      }
    }
  }
`;

export default StyledLogin;
