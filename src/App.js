import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import Frends from './components/Frends/Frends';
import { updateNewTextPost } from './Redux/State';

const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              path='/profile'
              element={
                <Profile
                  {...props.state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path='/messages*'
              element={
                <Dialogs
                  {...props.state.dialogsPage}
                  dispatch={props.dispatch}
                />
              }
            />
            {/* element={<Dialogs dialogs={props.state.dialogsPage.dialogs} message={props.state.dialogsPage.message}*/}
            <Route path='/news' element={<News />} />
            <Route path='/wmusic' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/frends' element={<Frends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
