import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Reels', href: '#', current: false },
  { name: 'Groups', href: '#', current: false },
  { name: 'Video', href: '#', current: false },
]

export default function Navbar({iorsb,iolsb}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
     <nav className='home-nav'>

        <h2 className='nav-logo'>AnyBook</h2>

        <div className="nav-link-items">
            {navigation.map((link,k)=>(
                <div key={k} className="link-item">
                    <Link className='link' to={link.href}>{link.name}</Link>
                </div>
            ))}
        </div>

        <div className="nav-info">
            <img className='nav-img' src="https://th.bing.com/th/id/OIP.mk0-Nx6ZDnnVSBopga6pYAHaHa?w=195&h=195&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1" alt="logo192.png" />
            <button className='btn-logout'>Logout</button>
        </div>

        <div className="menu-container">
            <FaBars className='menu-button' onClick={()=>setIsOpen(true)}/>
        </div>

        <div className={`dropdown-menu${isOpen ? " open" : ""}`} >
            <div className="dropdown-menu-header">
                <h2>AnyBook</h2>
                <GrClose onClick={()=>setIsOpen(false)}/>
            </div>

            <div className='dropdown-menu-link' >
                {navigation.map((link,k)=>(
                    <div key={k} className="link-item">
                        <Link className='link' to={link.href}>{link.name}</Link>
                    </div>
                ))}
                <button className="btn" onClick={()=>iorsb(true)}>OpenRightSideBare</button>
                <button className="btn" onClick={()=>iolsb(true)}>OpenRightSideBare</button>
            </div>

            <div className='dropdown-menu-info'>
                <img className='nav-img' src="logo192.png" alt="logo192.png" />
                <button className='btn-logout'>Logout</button>
            </div>

        </div>
    </nav>
  )
}
