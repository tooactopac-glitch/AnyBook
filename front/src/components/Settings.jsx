import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
                
export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();


  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  } 

  return (
    <div className='settings-container'>
      

        <div className="settings">
          

          <div className="settings-card">
            {/* Section Title */}
            <h2 className="settings-title">
              Theme
            </h2>

            {/* Theme Toggle Item */}
            <div
              className="settings-body"
            >
              <strong>Mode</strong>

              <label style={{ position: "relative", display: "inline-block", width: "50px", height: "26px" }}>
                <input
                  type="checkbox"
                  checked={theme}
                  onChange={() => setTheme(!theme)}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: theme ? "#444" : "#ccc",
                    transition: "0.3s",
                    borderRadius: "26px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      content: '""',
                      height: "18px",
                      width: "18px",
                      left: "4px",
                      bottom: "4px",
                      backgroundColor: "#FFF",
                      transition: "0.3s",
                      borderRadius: "50%",
                      transform: theme ? "translateX(24px)" : "translateX(0)",
                    }}
                  />
                </span>
              </label>


        
            </div>
          </div>
  

                    <div className="settings-card">
            {/* Section Title */}
            <h2 className="settings-title">
              other
            </h2>

            {/* Theme Toggle Item */}
            <div
              className="settings-body"
            >
              <strong>Logout</strong>

              

              <button className="btn" style={{backgroundColor:'red'}} onClick={handleLogout}>Logout</button>
        
            </div>
          </div>

        </div>


    </div>
  )

}