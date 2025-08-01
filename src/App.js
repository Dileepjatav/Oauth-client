import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import GoogleAuth from "./components/GoogleAuth";

const Login = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      fetch("http://localhost:3010/api/protected", {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => (window.location.href = "/dashboard"));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container">
      <div style={{ height: "40px", padding: "50px" }}>
        <h1>Please sign in</h1>
        <GoogleAuth />
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [user, setUser] = useState({ name: "", email: "", avatar: "" });
  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      fetch("http://localhost:3010/api/protected", {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            window.location.href = "/login";
          }
          return res.json();
        })
        .then((data) => setUser(data.user));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleLogout = async () => {
    await fetch("/auth/logout", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    });

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div>
      <img
        src={user.avatar}
        alt="Profile"
        width="50"
        referrerPolicy="no-referrer"
      />
      <h1>Welcome, {user.name}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
