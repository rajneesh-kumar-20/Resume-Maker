import React from "react";
import "./Contact.css";
import Navbar from "../../Molecules/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="colorful-div">
        <span style={{ backgroundColor: "red" }}></span>
        <span style={{ backgroundColor: "blue" }}></span>
        <span style={{ backgroundColor: "green" }}></span>
        <span style={{ backgroundColor: "yellow" }}></span>
        <span style={{ backgroundColor: "purple" }}></span>
        <span style={{ backgroundColor: "orange" }}></span>
      </div>
      <div className="contact-page">
        <div className="contact-info">
          <div className="info-card">
            <h3>Support Email</h3>
            <p>digitalgurucse@gmail.com</p>
          </div>
          <div className="info-card">
            <h3>Phone Number</h3>
            <p>9696559848</p>
          </div>
          <div className="info-card">
            <h3>Working Hours</h3>
            <p>9AM to 5PM Sunday to Friday</p>
          </div>
          <div className="info-card">
            <h3>Location</h3>
            <p>Ram Ram Bank Chauraha, Lucknow</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Contact With Us</h2>
          <p>We’d love to hear from you!</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <section className="footer-res-con">
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

export default Contact;
