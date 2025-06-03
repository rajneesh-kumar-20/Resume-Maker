import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Editor.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const ResumeDownload = () => {
  const navigate=useNavigate();  
  // State to store form input values
  const [formData, setFormData] = useState({
    fullName: "Gaurav Gupta",
    title: "Web Developer | App Developer",
    contact:
      "digitalgurucse@gmail.com | LinkedIn.Com | Digicoders Technologies, Junior Web Developer",
    summary:
      "Specialist in Designing of app and web I am Experiance over 1 year... ",
    experience: [
      {
        company: "Genentech",
        title: "Senior Business Analyst",
        location: "South San Francisco, CA",
        duration: "01/2016 - Present",
        description:
          "Led the development of an advanced analytics dashboard that improved decision-making speed...",
      },
      {
        company: "Amgen",
        title: "Business Systems Analyst",
        location: "Thousand Oaks, CA",
        duration: "06/2012 - 12/2015",
        description:
          "Implemented a strategic data integration solution that streamlined operations...",
      },
      {
        company: "BioMarin Pharmaceutical",
        title: "Data Analyst",
        location: "San Rafael, CA",
        duration: "03/2008 - 05/2012",
        description:
          "Analyzed and interpreted complex data sets to assist with strategic decision-making...",
      },
    ],
    education: [
      {
        school: "University of San Francisco",
        degree: "Master of Science in Information Systems",
        location: "San Francisco, CA",
        graduation: "01/2006 - 01/2008",
      },
      {
        school: "University of California, Berkeley",
        degree: "Bachelor of Science in Computer Science",
        location: "Berkeley, CA",
        graduation: "01/2002 - 01/2006",
      },
    ],
    achievements: [
      "Streamlined reporting processes, reduced time for data analysis by 40%...",
      "Led a data integration project, consolidating multiple data sources into a single framework...",
      "Received 'Innovator of the Year' award for predictive analytics model...",
    ],
    skills:
      "Data Visualization, Agile and Scrum, JIRA, SQL, ETL, Business Intelligence",
    certification:
      "Certified Scrum Master — Certification focusing on Agile project management methodologies, provided by Scrum Alliance.",
  });

  const handleInputChange = (e, section, index) => {
    if (section === "experience" || section === "education") {
      const updatedSection = [...formData[section]];
      updatedSection[index][e.target.name] = e.target.value;
      setFormData({ ...formData, [section]: updatedSection });
    } else if (section === "achievements") {
      const updatedAchievements = [...formData.achievements];
      updatedAchievements[index] = e.target.value;
      setFormData({ ...formData, achievements: updatedAchievements });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const generateResumePDF = () => {
    const doc = new jsPDF();

    // Title and Contact Information
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(formData.fullName, 15, 20);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(formData.title, 15, 30);
    doc.text(formData.contact, 15, 35);

    // Summary Section with Border
    doc.setDrawColor(200);
    doc.line(15, 42, 195, 42); // Top border line
    doc.setFontSize(14);
    doc.text("Summary", 15, 50);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(formData.summary, 15, 55, { maxWidth: 180 });

    // Experience Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Experience", 15, 70);
    doc.setDrawColor(200);
    doc.line(15, 75, 195, 75);

    formData.experience.forEach((exp, idx) => {
      const offset = 85 + idx * 30;
      doc.setFontSize(12);
      doc.text(exp.company, 15, offset);
      doc.setFont("helvetica", "italic");
      doc.text(exp.title, 15, offset + 5);
      doc.setFont("helvetica", "normal");
      doc.text(exp.location, 155, offset, { align: "left" });
      doc.text(exp.duration, 155, offset + 5, { align: "left" });
      doc.setFontSize(10);
      doc.text(exp.description, 15, offset + 10, { maxWidth: 180 });
    });

    // Education Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Education", 15, 170);
    doc.line(15, 175, 195, 175);

    formData.education.forEach((edu, idx) => {
      const offset = 185 + idx * 20;
      doc.setFontSize(10);
      doc.text(edu.school, 15, offset);
      doc.text(edu.degree, 15, offset + 5);
      doc.text(edu.location, 155, offset, { align: "left" });
      doc.text(edu.graduation, 155, offset + 5, { align: "left" });
    });

    // Key Achievements Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Key Achievements", 15, 220);
    doc.line(15, 225, 195, 225);

    formData.achievements.forEach((achievement, idx) => {
      const offset = 230 + idx * 5;
      doc.setFontSize(10);
      doc.text(achievement, 15, offset, { maxWidth: 180 });
    });

    // Skills Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Skills", 15, 255);
    doc.line(15, 260, 195, 260);
    doc.setFontSize(10);
    doc.text(formData.skills, 15, 265);

    // Certification Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Certification", 15, 280);
    doc.line(15, 285, 195, 285);
    doc.setFontSize(10);
    doc.text(formData.certification, 15, 290, { maxWidth: 180 });
    navigate('/');
    // Save the PDF
    doc.save(`${formData.fullName.replaceAll(" ", "_")}_Resume.pdf`);
    
  };

  return (
    <>
      <Navbar />

      <div className="resume-builder">
        <h1>Resume Builder</h1>

        {/* Step Navigation */}
        <div className="step-navigation">
          <button onClick={prevStep} disabled={step === 1} className="">
            Previous
          </button>
          <span>Step {step} of 5</span>
          <button onClick={nextStep} disabled={step === 5}>
            Next
          </button>
        </div>

        {/* Step 1: Personal Details */}
        {step === 1 && (
          <div className="form-step">
            <h2>Personal Details</h2>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full Name"
              onChange={handleInputChange}
            />

            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              placeholder="Ex: Web Developer"
              onChange={handleInputChange}
            />

            <label>Contact Information</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              placeholder="e.g., email, LinkedIn, phone"
              onChange={handleInputChange}
            />

            <label>Summary</label>
            <input
              type="text"
              name="summary"
              value={formData.summary}
              placeholder="Brief introduction about you"
              onChange={handleInputChange}
            />
          </div>
        )}

        {/* Step 2: Experience */}
        {step === 2 && (
          <div className="form-step">
            <h2>Work Experience</h2>
            {formData.experience.map((exp, idx) => (
              <div key={idx} className="experience-item">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                  }}
                >
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    onChange={(e) => handleInputChange(e, "experience", idx)}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                  }}
                >
                  <label>Job Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    onChange={(e) => handleInputChange(e, "experience", idx)}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                  }}
                >
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={(e) => handleInputChange(e, "experience", idx)}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                  }}
                >
                  <label>Duration</label>
                  <input
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    onChange={(e) => handleInputChange(e, "experience", idx)}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                  }}
                >
                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Description of Role"
                    onChange={(e) => handleInputChange(e, "experience", idx)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 3: Education */}
        {step === 3 && (
          <div className="form-step">
            <h2>Education</h2>
            {formData.education.map((edu, idx) => (
              <div key={idx} className="education-item">
                <div className="eduData">
                  <label>School</label>
                  <input
                    type="text"
                    name="school"
                    placeholder="School/University"
                    onChange={(e) => handleInputChange(e, "education", idx)}
                  />
                </div>

                <div className="eduData">
                  <label>Degree</label>
                  <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    onChange={(e) => handleInputChange(e, "education", idx)}
                  />
                </div>

                <div className="eduData">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={(e) => handleInputChange(e, "education", idx)}
                  />
                </div>

                <div className="eduData">
                  <label>Graduation Date</label>
                  <input
                    type="text"
                    name="graduation"
                    placeholder="Graduation Date"
                    onChange={(e) => handleInputChange(e, "education", idx)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 4: Achievements & Skills */}
        {step === 4 && (
          <div className="form-step">
            <h2>Achievements</h2>
            {formData.achievements.map((ach, idx) => (
              <input
                key={idx}
                type="text"
                name="achievement"
                placeholder="Achievement"
                onChange={(e) => handleInputChange(e, "achievements", idx)}
              />
            ))}

            <h2>Skills</h2>
            <input
              type="text"
              name="skills"
              placeholder="Skills"
              onChange={handleInputChange}
            />
          </div>
        )}

        {/* Step 5: Certification */}
        {step === 5 && (
          <div className="form-step">
            <h2>Certifications</h2>
            <input
              type="text"
              name="certification"
              placeholder="Certification"
              onChange={handleInputChange}
            />
          </div>
        )}

        {/* Submit Button */}
        {step === 5 && (
          <button className="submit-button" onClick={generateResumePDF}>
            Download Resume
          </button>
        )}
      </div>
    </>
  );
};

export default ResumeDownload;
