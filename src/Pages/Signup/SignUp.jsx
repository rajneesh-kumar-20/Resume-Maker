import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import signup from "../../Assests/signin.png";
// import signup from "../../Assests/signup.png";
import Navbar from "../../Molecules/Navbar/Navbar";

const SignUp = () => {
  const [isGifVisible, setGifVisible] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    setGifVisible(true);
    setTimeout(() => {
      setGifVisible(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-image">
            {isGifVisible ? (
              <img src={signup} alt="Rocket flying" className="rocket-gif" />
            ) : (
              <img src={signup} alt="Default" className="default-image" />
            )}
          </div>
          <form className="signup-form" onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <p>Create your account to start building resumes.</p>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                required
              />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
            <p>
              If you have already an account?{" "}
              <span
                onClick={() => navigate("/signin")}
                style={{ cursor: "pointer" }}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
      <section className="footer-res-signin">
        <div className="footer-container">
          <div className="footer-section brand">
            <h1>ResumeBuilder</h1>
            <p style={{ color: "black" }}>
              Empowering your digital journey with innovative solutions and
              expert guidance.
            </p>
          </div>
          <div className="footer-section links">
            <h3
              style={{ color: "#61dafb", fontSize: "30px", fontWeight: "bold" }}
            >
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  href="/about"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section social">
            <h3 style={{ color: "#61dafb" }}>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ color: "black", fontSize: "20px", margin: "0px" }}>
            &copy; 2024 ResumeBuilder. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
