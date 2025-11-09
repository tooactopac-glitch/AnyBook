import  { useState,useEffect,useContext } from "react";
import { MyContext } from "../context";
import {
  FaUserAlt,
  FaLock,
  FaUser,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// const BASE_URL = "https://bronchoscopically-subsessile-leeanne.ngrok-free.dev";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const {BASE_URL} = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
      return;
    }
  }, [navigate]);

  const handlerotp = async (e) => {
    e.preventDefault();
    const resultat = await fetch(`${BASE_URL}/api/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname, email, password }),
    });

    await resultat.json();
    setShowOTP(true);
  };

  const handlersubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${BASE_URL}/api/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await response.json();

    if (response.ok) {
      navigate("/login");
    } else {
      alert(data.message || "Something went wrong");
    }
  };

  


  return (
    <div className="login-page"> 
      <div className="login-card"> 
        <h1 className="login-title">Create Account</h1> 
        <form onSubmit={handlerotp} className="login-form"> 
          <div className="input-group input-group-r">
            <FaUserAlt className="input-icon" />
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              autoComplete="given-name"
            />
          </div>

          <div className="input-group input-group-r">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              autoComplete="family-name"
            />
          </div>

          <div className="input-group input-group-r">
            <FaEnvelope className="input-icon" />
            <input
              type="email" 
              placeholder="Enter your email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="input-group input-group-r">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="btn-secondary"
            >
              Already Have an Account? 
            </button>
          </div>
        </form>

        {showOTP && (
          <div className="otp-modal"> 
            <div className="otp-content"> 
              <FaTimes
                className="otp-close" 
                size={20}
                onClick={() => setShowOTP(false)}
              />
              <div className="otp-input-group"> 
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  autoFocus
                />
                <button onClick={handlersubmit} className="btn-primary">
                  Verify
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}