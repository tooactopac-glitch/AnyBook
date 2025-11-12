import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Register from "./pages/Register"
import Home from "./pages/Home"
import {ThemeProvider} from './context/ThemeContext';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/home' element={<Home />}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App