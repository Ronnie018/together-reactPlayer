import styled from 'styled-components';

const StyledRooms = styled.div`
  background-color: #150014;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  .container {
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    padding-top: 0;
    column-gap: 4rem;
    row-gap: 2rem;
    .search-container {
      flex: 1 1 300px;
      padding-top: 4rem;
      max-width: 90vw;
      margin: 0 auto;
      .filters {
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        .genres-list {
          background-color: #230030;
          width: min(90%, 340px);
          max-height: 210px;
          min-height: 20px;
          filter: drop-shadow(0px 4px 4px #060606);
          margin: 0 auto;
          overflow-y: scroll;
          display: flex;
          flex-wrap: wrap;
          row-gap: 0.2rem;
          column-gap: 0.2rem;
          margin-bottom: 1rem;
          color: white;
          ::-webkit-scrollbar {
            width: 0px;
          }
        }
      }
    }
    .rooms-container {
      flex: 5 1 400px;
      background-color: white;
      padding-top: 4rem;
      border-radius: 0 0 1rem 1rem;
      max-width: 90vw;
      margin: 0 auto;
      .header-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding-right: 2.5rem;
        .header {
          background-color: #72009a;
          color: white;
          padding: 1rem 2rem 1rem 4rem;
          min-width: max-content;
          width: 220px;
          font-size: 2.2rem;
          font-weight: 600;
          transform: translateX(-30px);
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        .create-btn {
          width: max-content;
          background-color: #72009a;
          padding: 0.5rem 2rem;
          color: white;

          box-shadow: 1px 2px 4px #9a8d8db7;
          &:active {
            transform: translate(0, 1px);
            box-shadow: 1px 2px 2px #dad2d274 inset;
          }
        }
        margin-bottom: 3rem;
      }
      .rooms {
        max-width: 92%;
        width: 800px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 1rem;
      }
    }
  }
`;

export default StyledRooms;
