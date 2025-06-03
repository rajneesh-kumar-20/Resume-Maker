import React from "react";
import { useNavigate } from "react-router-dom";
import temp1 from "../../Assests/temp1.png";
import temp2 from "../../Assests/res1.png";
import temp3 from "../../Assests/res2.png";
import temp4 from "../../Assests/res3.png";
import "./Template.css";
import Navbar from "../../Molecules/Navbar/Navbar";

const TemplateList = () => {
  const navigate = useNavigate();

  // Include image URLs for each template
  const templates = [
    { id: 1, name: "Template 1", image: temp1 },
    { id: 2, name: "Template 2", image: temp2 },
    { id: 3, name: "Template 3", image: temp3 },
    { id: 4, name: "Template 4", image: temp4 },
    { id: 5, name: "Template 5", image: temp1 },
    { id: 6, name: "Template 6", image: temp2 },
    { id: 7, name: "Template 7", image: temp3 },
    { id: 8, name: "Template 8", image: temp4 },
    { id: 9, name: "Template 9", image: temp1 },
    { id: 10, name: "Template 10", image: temp2 },
    { id: 11, name: "Template 11", image: temp3 },
    { id: 12, name: "Template 12", image: temp4 },
  ];

  return (
    <>
      <Navbar />
      <div className="tempSec">
        {templates.map((template) => (
          <div className="temp" key={template.id}>
            <img src={template.image} alt={`Template ${template.id}`} />
            <button onClick={() => navigate(`/edit-template/${template.id}`)}>
              Edit {template.name}
            </button>
          </div>
        ))}
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
          <p style={{ color: "black", fontSize: "20px" }}>
            &copy; 2024 ResumeBuilder. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default TemplateList;
