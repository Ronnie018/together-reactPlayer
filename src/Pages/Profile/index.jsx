import { createContext } from 'react';
import styled from 'styled-components';
import BottomProfile from '../../components/Profile/BottomProfile';
import { getProfileUser } from '../../components/Profile/hooks';
import TopProfile from '../../components/Profile/TopProfile';
import { AppContext } from '../../App';
import { Navigate } from 'react-router-dom';

const StyledProfile = styled.div`
  min-height: 100vh;
  max-width: 100%;
  background-color: #150014;
  * {
    transition: 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
export const ProfileUser = createContext(null);

const Profile = () => {
  const {currentUser} = useContext(AppContext);
  const user = getProfileUser();
  
  return (
    <ProfileUser.Provider value={user}>
      {!currentUser && <Navigate to='/login' />}
      <StyledProfile>
        <TopProfile />
        <BottomProfile />
      </StyledProfile>
    </ProfileUser.Provider>
  );
};

export default Profile;
