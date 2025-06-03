import React from "react";
import { useParams } from "react-router-dom";
import res1 from "../../Assests/res1.png";
import res2 from "../../Assests/res2.png";
import res3 from "../../Assests/res3.png";
import './Preview.css'

const ResumePreview = () => {
  const { templateId } = useParams();
  
  // Add images and other information for each template
  const templates = {
    1: {
      image: res1,
      title: "Professional Resume Template",
      description: "A modern, professional template perfect for corporate roles.",
    },
    2: {
      image: res2,
      title: "Creative Resume Template",
      description: "An eye-catching template ideal for creative roles.",
    },
    3: {
      image: res3,
      title: "Simple Resume Template",
      description: "A clean and simple template suitable for all fields.",
    },
  };

  const resume = templates[templateId];

  if (!resume) {
    return <p>Resume template not found.</p>;
  }

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = resume.image;
    link.download = `${resume.title.replace(" ", "_")}.png`; // Set the file name
    link.click();
  };

  return (
    <div className="resume-preview bookAnimation">
      <h1>{resume.title}</h1>
      <img src={resume.image} alt={`Template ${templateId}`} />
      <p>{resume.description}</p>
      <button onClick={downloadImage} className="downloadButton">
        Download Template
      </button>
    </div>
  );
};

export default ResumePreview;
