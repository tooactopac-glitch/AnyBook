import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContext";
import { IoChatbox, IoSettingsSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import {
  FaHome,
  FaImage,
  FaTv,
  FaUserFriends,
  FaVideo,
  FaVideoSlash,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const navigation = [
  { name: "Home", href: "#", current: true, icon: <FaHome /> },
  { name: "Reels", href: "#", current: false, icon: <FaImage /> },
  { name: "Groups", href: "#", current: false, icon: <FaUserGroup /> },
  { name: "Video", href: "#", current: false, icon: <FaVideo /> },
];

export default function Navbar({
  iorsb,
  iolsb,
  iop,
  iopValue,
  iolsbValue,
  iorsbbValue,
}) {
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
      <h2 className="nav-logo">AnyBook</h2>

      <div className="nav-link-items">
        {navigation.map((link, k) => (
          <div key={k} className="link-item">
            <Link className="link" to={link.href}>
              {link.icon} {link.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="nav-info">
        <CiDark
          className="dark"
          style={{ display: theme ? "inline" : "none" }}
          onClick={() => setTheme(false)}
        />
        <CiLight
          className="light"
          style={{ display: theme ? "none" : "inline" }}
          onClick={() => setTheme(true)}
        />
        <IoSettingsSharp size="25" className="settings-icon" />
        <img
          className="nav-img"
          src="https://th.bing.com/th/id/OIP.mk0-Nx6ZDnnVSBopga6pYAHaHa?w=195&h=195&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1"
          alt="logo192.png"
          onClick={() => (iopValue ? iop(false) : iop(true))}
        />
      </div>

      {/* MOBILE */}

      <div className="bottom-nav">
        <CiDark
          className="dark"
          style={{ display: theme ? "inline" : "none" }}
          onClick={() => setTheme(false)}
        />
        <CiLight
          className="light"
          style={{ display: theme ? "none" : "inline" }}
          onClick={() => setTheme(true)}
        />
        <IoSettingsSharp
          size="25"
          className="settings-icon"
          onClick={() => (iopValue ? iop(false) : iop(true))}
        />
        <FaUserFriends
          size="25"
          onClick={() => iorsb(iorsbbValue ? false : true)}
          title="Suggested Friends"
        />
        <IoChatbox
          size="30"
          onClick={() => iolsb(iolsbValue ? false : true)}
          title="Contacts"
        />
        <IoIosContact
          size="30"
          title="Contacts"
        />
      </div>
    </nav>
  );
}
