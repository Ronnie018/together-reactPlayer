import styled from 'styled-components';

const StyledTopProfile = styled.div`
  .background {
    height: 220px;
    background-color: antiquewhite;
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;
    & {
      //filter blur
      -webkit-filter: blur(3px);
      -moz-filter: blur(3px);
      -o-filter: blur(3px);
      -ms-filter: blur(3px);
      filter: blur(3px);
    }
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    &::before {
      content: '';
      height: 3px;
      width: 100%;
      background-color: aliceblue;
      position: absolute;
      left: 0;
    }
    .top-container {
      display: flex;
      flex-wrap: wrap;
      .image {
        width: 250px;
        height: 125px;
        .img-wrapper {
          margin: 0 auto;
          width: 250px;
          height: 250px;
          max-width: 70vw;
          max-height: 70vw;
          transform: translateY(-50%);
          border-radius: 1rem;
          border: 3px solid white;
          overflow: hidden;
        }
      }
      .text {
        color: white;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        row-gap: 0.2rem;
        .name {
          display: flex;
          column-gap: 1rem;
          row-gap: 1rem;
          align-items: center;
          flex-wrap: wrap-reverse;
          justify-content: center;
          span {
            font-size: 3rem;
            font-weight: 500;
          }
          .status {
            width: 40px;
            height: 40px;
            background-color: ${({ isOnline }) =>
              isOnline ? '#00FF94' : '#a2a2a2'};
            border-radius: 100vmax;
          }
        }
        .listening {
          margin-left: 2px;
          font-weight: 100;
          color: #959595;
          display: flex;
          column-gap: 0.5rem;
          font-size: 1.4rem;
          .song {
            font-weight: 600;
          }
        }
      }
    }
    @media (max-width: 651px) {
      padding: 0 0.1rem;
      .top-container {
        justify-content: center;
        .text {
          text-align: center;
          .name {
            span {
              text-align: center;
            }
          }
          .listening {
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
    @media (max-width: 529px) {
      .top-container {
        .text {
          .name {
            span {
              font-size: 2rem;
            }
            .status {
              width: 20px;
              height: 20px;
            }
          }
          .listening {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
//
export default StyledTopProfile;
