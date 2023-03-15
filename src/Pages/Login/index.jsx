import styled from 'styled-components';
import { useState, createContext, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { SignInForm, SignUpForm } from '../../components/Login/forms';
import StyledLogin from './styled';
import { signIn, signUp } from '../../gun/authentication';
import { AppContext } from '../../App';

const Login = () => {
  const { currentUser } = useContext(AppContext);
  const [toggle, changeToggle] = useState(true);
  return (
    <StyledLogin>
      {currentUser && <Navigate to='/' />}
      <div className='container'>
        <div className='left'>
          <div className='image-wrapper'>
            <img
              src='logo-login.png'
              alt='person listening to music'
              width='100%'
            />
          </div>
          <div className='text'>
            <span>Share the music you love around the world</span>
          </div>
        </div>
        <div className='right'>
          {toggle ? (
            <SignInForm toggle={changeToggle} signIn={signIn} />
          ) : (
            <SignUpForm toggle={changeToggle} signUp={signUp} />
          )}
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
