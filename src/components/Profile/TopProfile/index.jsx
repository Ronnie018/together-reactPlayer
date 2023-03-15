import styled from 'styled-components';
import { getProfileUser } from '../hooks';
import { MdHeadphones } from 'react-icons/all';
import { useContext } from 'react';
import { ProfileUser } from '../../../Pages/Profile';
import StyledTopProfile from './styled';

const TopProfile = () => {
  const user = useContext(ProfileUser);
  return (
    <StyledTopProfile url={user.images.bg} isOnline={user.isOnline}>
      <div className='background' />
      <div className='content'>
        <div className='top-container'>
          <div className='image'>
            <div className='img-wrapper'>
              <img src={user.images.image} alt='' width='100%' />
            </div>
          </div>
          <div className='text'>
            <div className='name'>
              <span>{user.name}</span> <div className='status' />
            </div>
            <div className='listening'>
              <MdHeadphones />
              {user.currentSong ? (
                <>
                  Listening to <span className='song'>{user.currentSong}</span>
                </>
              ) : (
                'Not listening'
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledTopProfile>
  );
};

export default TopProfile;
