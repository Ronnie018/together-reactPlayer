import { useRef, useContext } from 'react';
import { StyledInput, StyledLoginForm, StyledButton } from './styled';
import { AppContext } from '../../App';
import gun from '../../gun';

export const SignUpForm = ({ toggle, signUp }) => {
  const { setCurrentUser } = useContext(AppContext);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();

  function handleSignUp(e) {
    e.preventDefault();
    const email_value = toLowerCase(email.current.value);
    signUp(
      email_value,
      password.current.value,
      username.current.value,
      (user) => {
        const { email, password } = user;
        console.log('sign up callback');
        gun.user().auth(email, password, (ack) => {
          // sign in
          if (ack.err) {
            console.log('error', ack.err);
          } else {
            console.log('success', ack);
            setCurrentUser(ack);
          }
        });
      }
    );
    // should redirect to home page
  }

  function checkEqualty(e) {
    const pass = password.current;
    const rePass = rePassword.current;
    const isEqual = pass.value === rePass.value;
    rePass.nextSibling.innerText = isEqual ? '' : 'Passwords not match';
  }

  function checkChars() {
    const pass = password.current;
    const hasChars = pass.value.length > 7;
    pass.nextSibling.innerText = !hasChars
      ? 'password too short'
      : !hasNums(pass.value)
      ? 'Password should have numbers'
      : '';
  }

  function handlePasswordChange(e) {
    checkEqualty(e);
    checkChars();
  }

  function handleRePasswordChange(e) {
    checkEqualty(e);
  }

  return (
    <StyledLoginForm>
      <div className='header'>Sign Up</div>
      <form onSubmit={handleSignUp}>
        <label htmlFor='username' className='input-label'>
          <span>Username</span>
          <StyledInput
            ref={username}
            type='text'
            name='username'
            id='username'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className='message'></div>
        </label>
        <label htmlFor='email' className='input-label'>
          <span>Email</span>
          <StyledInput
            ref={email}
            type='text'
            name='email'
            id='email'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className='message'></div>
        </label>
        <label htmlFor='password' className='input-label'>
          <span>Password</span>
          <StyledInput
            ref={password}
            type='password'
            name='password'
            id='password'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handlePasswordChange}
          />
          <div className='message'></div>
        </label>
        <label htmlFor='repeat' className='input-label'>
          <span>Repeat Password</span>
          <StyledInput
            ref={rePassword}
            type='password'
            name='repeat'
            id='repeat'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleRePasswordChange}
          />
          <div className='message'></div>
        </label>
        <StyledButton type='submit'>Send</StyledButton>
        <button
          className='toggle-link'
          onClick={() => {
            toggle((value) => !value);
          }}
        >
          sign In
        </button>
      </form>
    </StyledLoginForm>
  );
};

export const SignInForm = ({ toggle, signIn }) => {
  const { setCurrentUser } = useContext(AppContext);
  const email = useRef();
  const password = useRef();

  function handleSignIn(e) {
    e.preventDefault();
    const email_value = toLowerCase(email.current.value);
    signIn(email_value, password.current.value, (user) => {
      console.log('sign in callback');
      const { email, password } = user;
      gun.user().auth(email, password, (ack) => {
        // sign in
        if (ack.err) {
          console.log('error', ack.err);
        } else {
          console.log('success', ack);
          setCurrentUser(ack);
        }
      });
    });
  }

  return (
    <StyledLoginForm>
      <div className='header'>Sign In</div>
      <form onSubmit={handleSignIn}>
        <label htmlFor='email' className='input-label'>
          <span>Email</span>
          <StyledInput
            ref={email}
            type='text'
            name='email'
            id='email'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <label htmlFor='password' className='input-label'>
          <span>Password</span>
          <StyledInput
            ref={password}
            type='password'
            name='password'
            id='password'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <StyledButton type='submit'>Send</StyledButton>
        <button
          className='toggle-link'
          onClick={() => {
            toggle((value) => !value);
          }}
        >
          sign up
        </button>
      </form>
    </StyledLoginForm>
  );
};

function handleBlur(e) {
  const parent = e.target.parentElement;
  parent.classList.remove('focus');
  if (e.target.value.length > 0) {
    parent.classList.add('text');
  } else {
    parent.classList.remove('text');
  }
}

function handleFocus(e) {
  const parent = e.target.parentElement;
  parent.classList.add('focus');
}

function hasNums(value) {
  return value.match(/\d/) ? true : false;
}

function toLowerCase(value) {
  return value.toLowerCase();
}
