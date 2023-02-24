import { useState } from 'react';
import styled from 'styled-components';
import Main from './Pages/Main';
import './utils.css';

const StApp = styled.div``;

function App() {
  return (
    <StApp className='App'>
      <Main />
    </StApp>
  );
}

export default App;
