import { React, useEffect, useState } from "react";
import "./Hero.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../../Assests/imgHero1.webp";
import hero2 from "../../Assests/imgHero2.webp";
import hero3 from "../../Assests/imgHero3.webp";
import arrow from "../../Assests/arrow.png";
import res1 from "../../Assests/res1.png";
import res2 from "../../Assests/res2.png";
import res3 from "../../Assests/res3.png";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplate, setShowTemplate] = useState(null);

  const showResume = (templateId) => {
    setShowTemplate(templateId);
    setTimeout(() => {
      navigate(`/resumePreview/${templateId}`);
      setShowTemplate(null);
    }, 500);
  };

  const goToEditor = (templateId) => {
    setSelectedTemplate(templateId); // Trigger the flash animation
    setTimeout(() => {
      navigate(`/resumeEditor/${templateId}`);
      setSelectedTemplate(null); // Reset the state after navigation
    }, 500); // Delay navigation until after animation
  };

  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in milliseconds
      easing: "ease-in-sine", // Easing function
      delay: 100, // Delay in milliseconds
    });
  }, []);
  const steps = [
    {
      id: 1,
      title: "Create your Account",
      icon: "fa-solid fa-user",
    },
    {
      id: 2,
      title: "Choose Your Resume",
      icon: "fa-solid fa-file",
    },
    {
      id: 3,
      title: "Add Your Information",
      icon: "fa-solid fa-book-open",
    },
    {
      id: 4,
      title: "Download Your Resume",
      icon: "fa-solid fa-file-export",
    },
  ];
  return (
    <>
      <div className="mainHero" data-aos="fade-up">
        <div className="leftDiv">
          <div className="imagesDiv">
            <img src={hero1} alt="Hero Image 1" className="img1" />
            <img src={hero2} alt="Hero Image 2" className="img2" />
            <img src={hero3} alt="Hero Image 3" className="img3" />
          </div>
        </div>
        <div className="rightDiv">
          <div className="contentDiv">
            <h1>
              Create Your Winning <span>Resume</span> in Minutes.
            </h1>
            <p>
              Our Perfect resume builder takes the hassle out of resume writing.
              Choose from several templates and follow easy prompts to create
              the perfect job-ready resume.
            </p>
            <div className="buttonGroup">
              <button className="butttons">
                <a
                  href="#templateSection"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CHOOSE TEMPLATE
                </a>
              </button>
              <button className="butttons">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CONTACT US
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="steps-container">
        <div className="header">
          <button className="how-it-works-button">How it Works</button>
          <h2>Easy Steps To Build Your Resume</h2>
        </div>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step" key={step.id}>
              <div className="icon-container">
                <i className={step.icon}></i>
              </div>
              <p className="step-number">Step Num #{step.id}</p>
              <h3 className="step-title">{step.title}</h3>
              {index < steps.length - 1 && (
                <span className="arrow">
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ height: "50px" }}
                  ></i>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="template-section" id="templateSection">
        <div className="headerTemplate">
          <button className="how-it-works-button">
            <Link
              to="/template"
              style={{ textDecoration: "none", color: "black" }}
            >
              Explore Our Templates
            </Link>
          </button>
          <h1 className="headerQuate">
            Craft a Professional Resume in Minutes. Choose a Template, Showcase
            Your Potential.
          </h1>
          <p>Hover Me</p>
          <img src={arrow} />
        </div>
        <div className="templates">
          <div
            className={`template temp1 ${
              selectedTemplate === 1 ? "flash-animation" : ""
            }`}
          >
            <img
              src={res1}
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "green",
              }}
            />
            <div className="overlay">
              <h2>Resume Template 1</h2>
              <p>Some description about this template.</p>
              <li>
                <button onClick={() => showResume(1)}>SEE TEMPLATE</button>
              </li>
              <li>
                <button onClick={() => goToEditor(1)}>USE TEMPLATE</button>
              </li>
            </div>
          </div>

          <div
            className={`template temp2 ${
              selectedTemplate === 2 ? "flash-animation" : ""
            }`}
          >
            <img
              src={res2}
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "green",
              }}
            />
            <div className="overlay">
              <h2>Resume Template 2</h2>
              <p>Some description about this template.</p>
              <li>
                <button onClick={() => showResume(2)}>SEE TEMPLATE</button>
              </li>
              <li>
                <button onClick={() => goToEditor(2)}>USE TEMPLATE</button>
              </li>
            </div>
          </div>
          <div
            className={`template temp3 ${
              selectedTemplate === 3 ? "flash-animation" : ""
            }`}
          >
            <img
              src={res3}
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "green",
              }}
            />
            <div className="overlay">
              <h2>Resume Template 3</h2>
              <p>Some description about this template.</p>
              <li>
                <button onClick={() => showResume(3)}>SEE TEMPLATE</button>
              </li>
              <li>
                <button onClick={() => goToEditor(3)}>USE TEMPLATE</button>
              </li>
            </div>
          </div>
        </div>
      </div>
      <section className="footer-res">
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

export default Hero;
