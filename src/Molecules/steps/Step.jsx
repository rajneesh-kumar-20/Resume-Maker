import React from 'react';
import './Step.css'; 

const Step = () => {
  const steps = [
    {
      id: 1,
      title: 'Create your Account',
      icon: '📦', 
    },
    {
      id: 2,
      title: 'Choose Your Resume',
      icon: '💬', 
    },
    {
      id: 3,
      title: 'Add Your Information',
      icon: '📋', 
    },
    {
      id: 4,
      title: 'Download Your Resume',
      icon: '📄', 
    },
  ];

  return (
    <div className="steps-container">
      <div className="header">
        <button className="how-it-works-button">How it Works</button>
        <h2>Easy Steps To Build Your Resume</h2>
      </div>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div className="step" key={step.id}>
            <div className="icon-container">
              {step.icon} 
            </div>
            <p className="step-number">Step Num #{step.id}</p>
            <h3 className="step-title">{step.title}</h3>
            {index < steps.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;
