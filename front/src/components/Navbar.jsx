import {  useEffect,useContext } from "react";
import {Link} from 'react-router-dom'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from '../context/ThemeContext';
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Reels', href: '#', current: false },
  { name: 'Groups', href: '#', current: false },
  { name: 'Video', href: '#', current: false },
]

export default function Navbar({iorsb,iolsb,iop,iopValue}) {
  const { theme, setTheme } = useContext(ThemeContext); 

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setIsOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();  
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  return (
     <nav className="home-nav">

        <h2 className='nav-logo'>AnyBook</h2>

        <div className="nav-link-items">
            {navigation.map((link,k)=>(
                <div key={k} className="link-item">
                    <Link className='link' to={link.href}>{link.name}</Link>
                </div>
            ))}
        </div>

        <div className="nav-info">
            <CiDark className="dark" style={{display : theme? 'inline' : 'none' }} onClick={()=>setTheme(false)}/>
            <CiLight className="light" style={{display : theme? 'none' : 'inline'}}  onClick={()=>setTheme(true)}/>
            <IoSettingsSharp size="25" className="settings-icon" onClick={()=>iopValue ? iop(false) : iop(true)}/>
            <img className='nav-img' src="https://th.bing.com/th/id/OIP.mk0-Nx6ZDnnVSBopga6pYAHaHa?w=195&h=195&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1" alt="logo192.png" />
        </div>
        
        {/* MOBILE */}

        <div className="bottom-nav">
            <CiDark className="dark" style={{display : theme? 'inline' : 'none' }} onClick={()=>setTheme(false)}/>
            <CiLight className="light" style={{display : theme? 'none' : 'inline'}}  onClick={()=>setTheme(true)}/>
            <IoSettingsSharp size="25" className="settings-icon" onClick={()=>iopValue ? iop(false) : iop(true)}/>
            <FaUserFriends size="25" onClick={()=>iorsb(true)} title="Suggested Friends"/>
            <IoIosContact size="30" onClick={()=>iolsb(true)} title="Contacts"/>
        </div>
        


    </nav>
  )
}
