import { useEffect,useState,useContext } from "react";
import { MyContext } from "../context";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {BASE_URL} = useContext(MyContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
      return;
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
      console.log(`${BASE_URL}/api/login`)

    const resultat = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await resultat.json();
    console.log(data)
    if (data.datauser) {
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
  };
 return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="text"
              placeholder="Enter your email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-primary">
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="btn-secondary"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}