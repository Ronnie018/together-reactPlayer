import { useEffect, useState, createContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils.css';

import gun from './gun';

import Main from './Pages/Main';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Rooms from './Pages/Rooms';

export const AppContext = createContext();

const StApp = styled.div``;

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let isRunning = false;

  useEffect(() => {
    if (isRunning) return;
    isRunning = true;
    (async () => {
      const user = await rehydrate();
      setCurrentUser(user);
    })();
  }, []);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      <StApp className='App'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Rooms />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/room/:id' element={<Main />}></Route>
            {/* should rename this chain to Room */}
          </Routes>
        </Router>
      </StApp>
    </AppContext.Provider>
  );
}

export default App;

async function rehydrate() {
  return await gun.user().recall({ sessionStorage: true }, (ack) => {
    return ack;
  });
}

/*

  var pair = await SEA.pair(); // generate a new keypair
  var enc = await SEA.encrypt('hello self', pair); // encrypt a message
  var data = await SEA.sign(enc, pair);
  console.log(data);
  var msg = await SEA.verify(data, pair.pub);
  var dec = await SEA.decrypt(msg, pair);
  var proof = await SEA.work(dec, pair);
  var check = await SEA.work('hello self', pair);
  console.log(dec);
  console.log(proof === check);
}

*/

// structure:
// rooms has a request and response fields:
// [
//  {user: str, response: bool, password: str},
// ]
// owner watch for requests:
// owner observer will create a check with SEA.work(password, pair) and compare it to the proof;
// user watch for responses
// once a response is positive, the user is redirected to the room

// user vision:
// 1. user goes to site
// 2. user is prompted to login
// 3. user is redirected to the lobby
// 4. user select a room
// 5. user send a password request
// 6. user is redirected to the room or not

// owner vision:
// 1. owner goes to site
// 2. owner is prompted to login
// 3. owner is redirected to the lobby
// 4. owner create a room
// 5. owner is redirected to the room
// 6. owner can manage the room

// room vision:
// 1. room has a chat
// 2. room has a video
// 3. room has a user list
// 4. room has a user permissions

