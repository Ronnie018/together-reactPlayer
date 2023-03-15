import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/all';
import Tag from '../../../Global/Tag';
import { useContext } from 'react';
import { ProfileUser } from '../../../../Pages/Profile';
import { Fragment } from 'react';
import getColor from '../../../Global/getColor';
import UserAchievements from '../UserAchievements';

const StyledStatistics = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  .tags {
    display: flex;
    column-gap: 0.6rem;
  }
  .favorite {
    display: flex;
    column-gap: 0.5rem;
    align-items: center;
    .song {
      font-size: 1.4rem;
    }
  }
  .total {
    font-family: 'Nunito', sans-serif;
    font-weight: 100;
    font-size: 1.2rem;
    color: white;
    span {
      font-family: 'rubik', sans-serif;
      font-weight: 400;
    }
  }
`;

const Statistics = () => {
  const user = useContext(ProfileUser);
  const color = getColor(user.favorite.style);
  return (
    <StyledStatistics>
      <div className='tags'>
        {user.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </div>
      <div className='favorite'>
        <BsHeartFill size={26} color={color} />
        <span className='song' style={{ color: color }}>
          {user.favorite.name}
        </span>
      </div>
      <div className='total'>
        <span>{user.totalValue}</span> Songs Listened
      </div>
      <div className='achievements'>
        <UserAchievements achievements={user.achievements} />
      </div>
    </StyledStatistics>
  );
};

export default Statistics;
