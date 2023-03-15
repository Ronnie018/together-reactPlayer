import styled from 'styled-components';

const StyledAchievements = styled.div`
  display: flex;
  column-gap: 0.5rem;
  margin-top: 1rem;
  .badge {
    .img-wrapper {
      width: 50px;
      border-radius: 100vmax;
      overflow: hidden;
      background-color: white;
      display: grid;
      place-items: center;
    }
    .description {
      background-color: #72009a;
      border-radius: 5px;
      position: absolute;
      font-size: 0;
      color: white;
      transform: translateY(5px);
    }
    &:hover {
      .description {
        padding: 1rem;
        max-width: 150px;
        min-height: 40px;
        font-size: 16px;
        font-weight: 300;
        &::before {
          content: '';
          height: 12px;
          width: 12px;
          background-color: #72009a;
          position: absolute;
          top: -6px;
          transform: rotate(45deg);
        }
      }
    }
  }
`;

export default StyledAchievements;
