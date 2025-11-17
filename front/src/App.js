import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Register from "./pages/Register"
import Home from "./pages/Home"
import Profile from './components/Profile';
import Feed from './components/Feed';
import Settings from "./components/Settings"
import {ThemeProvider} from './context/ThemeContext';
import CreatePost from './components/CreatePost';
import { useState,useEffect } from 'react';
import { MyContextProvider } from './context';
import Reactions from './components/Reactions';


function AuthCheckToken({ children }) {
  const token = localStorage.getItem("token");
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (!token) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    // fetch(`${path}/validtoken`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${token}`,
    //   },
    // })
    //   .then((r) => {
    //     if (!r.ok) {
    //       throw new Error("Unauthorized");
    //     }
    //     return r.json();
    //   })
    //   .then((res) => {
    //     if (res?.message) {
    //       setIsValid(true);
    //     } else {
    //       setIsValid(false);
    //     }
    //   })
    //   .catch(() => {
    //     sessionStorage.removeItem("token");
    //     setIsValid(false);
    //   });
  }, [token]);

  if (isValid === null) {
    return <div>Loading...</div>;
  }
  if (!isValid) {
    return <Navigate to="/Login" replace/>;
  }

  return children;
}


function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <MyContextProvider>
        <Router>
          <Routes>

            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>

            <Route path='/home' element={<AuthCheckToken><Home /></AuthCheckToken>}>
              
              <Route path='profile/:id' element={<Profile />} />
              <Route path='settings' element={<Settings />} />
              <Route path='createPost' element={<CreatePost />} />
              <Route path='reactions/:postid' element={<Reactions />} />
              <Route index element={<Feed />} /> 
              
            </Route>

            <Route path='*' element={<Navigate to='/home' replace />} />

          </Routes>
        </Router>
        </MyContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App