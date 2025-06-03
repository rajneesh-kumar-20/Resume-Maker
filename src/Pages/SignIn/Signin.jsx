import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import signin from "../../Assests/signin.png";
import Navbar from "../../Molecules/Navbar/Navbar";

const Signin = () => {
  const navigate = useNavigate();
  const [isGifVisible, setGifVisible] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setGifVisible(true);
    setTimeout(() => {
      setGifVisible(false); // Reset GIF after animation
    }, 3000); // Adjust time based on GIF length
  };

  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="signin-card">
          <div className="signin-image">
            {isGifVisible ? (
              <img src={signin} alt="Rocket flying" className="rocket-gif" />
            ) : (
              <img src={signin} alt="Default" className="default-image" />
            )}
          </div>
          <form className="signin-form" onSubmit={handleSignIn}>
            <h2>Sign In</h2>
            <p>Unlock your world.</p>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
            <button
              type="button"
              className="create-account-button"
              onClick={() => navigate("/signup")}
            >
              Create an Account
            </button>
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

export default Signin;
