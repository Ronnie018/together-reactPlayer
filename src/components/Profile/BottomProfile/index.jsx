import styled from 'styled-components';
import { useContext } from 'react';
import { ProfileUser } from '../../../Pages/Profile';
import Statistics from './Statistics';
import FrequencyCard from './FrequencyCard';

const StyledBottomProfile = styled.div`
  padding: 1rem 0;
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    .bio {
      span {
        font-size: 1.8rem;
        color: white;
        font-weight: 200;
      }
      margin-bottom: 1.5rem;
    }
    .bottom {
      display: flex;
      column-gap: 2rem;
    }
  }
`;

const BottomProfile = () => {
  const user = useContext(ProfileUser);
  return (
    <StyledBottomProfile>
      <div className='content'>
        <div className='bio'>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            reprehenderit quas pariatur quos odit aut!
          </span>
        </div>
        <div className='bottom'>
          <Statistics />
          <FrequencyCard frequency={user.frequency} />
        </div>
      </div>
    </StyledBottomProfile>
  );
};

export default BottomProfile;
