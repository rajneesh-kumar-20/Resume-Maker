import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import ContentEditable from "react-contenteditable";

const EditTemplate = () => {
  const { id } = useParams();

  // Template data for all IDs
  const templateData = {
    1: {
      name: "Gaurav Gupta",
      title: "Creative Director",
      address: "123 Address St, Anytown, NY 10011",
      phone: "123.456.7890",
      email: "no_reply@example.com",
      summary:
        "Experienced Creative Director with over 10 years of expertise in developing innovative campaigns and leading diverse creative teams. Proven track record of delivering high-impact projects under tight deadlines while exceeding client expectations.",
      skills:
        "Creative problem-solving, team leadership, brand strategy, graphic design, project management, video production, storytelling, client relations, Adobe Creative Suite, Figma",
      experience: `
        Company Name / Creative Director (2020 - Present, Anytown, NY)
          - Led a team of 15 designers and copywriters to develop creative campaigns for Fortune 500 clients.
          - Increased client retention by 25% through the delivery of high-quality, on-brand visuals.
          - Spearheaded a social media campaign that increased engagement by 300% within six months.
          
        Agency Plus / Art Director (2015 - 2020, Anytown, NY)
          - Designed and executed marketing campaigns that won multiple industry awards.
          - Collaborated with cross-functional teams to ensure cohesive messaging across all platforms.
          - Managed a $2M budget for large-scale advertising projects.
          
        Creative Studios / Junior Designer (2012 - 2015, Anytown, NY)
          - Contributed to the design of print and digital materials for a wide range of clients.
          - Assisted senior designers in brainstorming sessions and project planning.
      `,
      education: `
        Parsons School of Design / BFA in Graphic Design (2015 - 2019, New York, NY)
          - Graduated with honors; GPA: 3.8
          - Coursework: Typography, Brand Identity, Motion Graphics, UX/UI Design
      `,
      certifications: `
        - Google Creative Certification (2021)
        - Adobe Certified Expert (2019)
        - Project Management Professional (PMP) Certification (2020)
      `,
      awards: `
        - Best Creative Campaign, National Marketing Awards (2022)
        - Top 30 Under 30 Creative Professionals, CreativePro Magazine (2019)
        - Gold Winner, Design Excellence Award (2020)
      `,
      hobbies:
        "Photography, painting, travel blogging, volunteer work in community art programs",
    },
    2: {
      name: "John Doe",
      title: "Software Engineer",
      address: "456 Developer Blvd, Code City, CA 90210",
      phone: "555.555.5555",
      email: "john.doe@example.com",
      skills: "JavaScript, React, Node.js, APIs",
      experience: "TechCorp / Developer (2018 - Present)",
      education: "Tech University / B.Tech (2014 - 2018)",
      awards: "Hackathon Winner",
    },
    3: {
      name: "Jane Smith",
      title: "Marketing Specialist",
      address: "789 Marketing Lane, Media City, NY 10110",
      phone: "123.456.7890",
      email: "jane.smith@example.com",
      skills: "Social Media Strategy, SEO, Content Marketing",
      experience: "AdAgency / Specialist (2019 - Present)",
      education: "Marketing School / MBA (2016 - 2018)",
      awards: "Best Campaign Strategy",
    },
    4: {
      name: "Gaurav Gupta",
      title: "Data Analyst",
      address: "123 Data St, Analytics City, NY 20020",
      phone: "123.789.4561",
      email: "gaurav.gupta@example.com",
      skills: "Data Analysis, Machine Learning, Python",
      experience: "DataCorp / Analyst (2020 - Present)",
      education: "Data University / MS (2017 - 2020)",
      awards: "Top Analyst Award",
    },
  };

  const [formData, setFormData] = useState(templateData[id]);

  const handleContentChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Dynamic styling and content based on `id`
    if (id === "1") {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text(formData.name, 10, 20);
        doc.setFontSize(14);
        doc.text(formData.title, 10, 30);
        doc.setFontSize(12);
        doc.text(`Address: ${formData.address}`, 10, 40);
        doc.text(`Phone: ${formData.phone}`, 10, 50);
        doc.text(`Email: ${formData.email}`, 10, 60);
    
        doc.text("Summary:", 10, 70);
        doc.text(doc.splitTextToSize(formData.summary, 180), 20, 80);
    
        doc.text("Skills:", 10, 110);
        doc.text(doc.splitTextToSize(formData.skills, 180), 20, 120);
    
        doc.text("Experience:", 10, 140);
        doc.text(doc.splitTextToSize(formData.experience, 180), 20, 150);
    
        doc.text("Education:", 10, 190);
        doc.text(doc.splitTextToSize(formData.education, 180), 20, 200);
    
        doc.text("Certifications:", 10, 240);
        doc.text(doc.splitTextToSize(formData.certifications, 180), 20, 250);
    
        doc.text("Awards:", 10, 280);
        doc.text(doc.splitTextToSize(formData.awards, 180), 20, 290);
    
        doc.text("Hobbies:", 10, 330);
        doc.text(doc.splitTextToSize(formData.hobbies, 180), 20, 340);
    } else if (id === "2") {
      doc.setFont("times", "italic");
      doc.setFontSize(20);
      doc.text(formData.name, 10, 20);
      doc.setFontSize(14);
      doc.text(formData.title, 10, 30);
      doc.text(`Address: ${formData.address}`, 10, 50);
      doc.text(`Phone: ${formData.phone}`, 10, 60);
      doc.text(`Email: ${formData.email}`, 10, 70);
      doc.text("Skills:", 10, 90);
      doc.text(doc.splitTextToSize(formData.skills, 180), 20, 100);
      doc.text("Experience:", 10, 120);
      doc.text(doc.splitTextToSize(formData.experience, 180), 20, 130);
      doc.text("Education:", 10, 180);
      doc.text(doc.splitTextToSize(formData.education, 180), 20, 190);
      doc.text("Certifications:", 10, 240);
      doc.text(doc.splitTextToSize(formData.certifications, 180), 20, 250);
      doc.text("Awards:", 10, 300);
      doc.text(doc.splitTextToSize(formData.awards, 180), 20, 310);
    } else if (id === "3") {
      doc.setFont("courier", "normal");
      doc.setFontSize(18);
      doc.text(formData.name, 105, 20, null, null, "center");
      doc.setFontSize(14);
      doc.text(formData.title, 105, 30, null, null, "center");
      doc.setFontSize(12);
      doc.text(`Address: ${formData.address}`, 10, 50);
      doc.text(`Phone: ${formData.phone}`, 10, 60);
      doc.text(`Email: ${formData.email}`, 10, 70);
      doc.text("Skills:", 10, 90);
      doc.text(doc.splitTextToSize(formData.skills, 180), 20, 100);
      doc.text("Experience:", 10, 130);
      doc.text(doc.splitTextToSize(formData.experience, 180), 20, 140);
      doc.text("Education:", 10, 190);
      doc.text(doc.splitTextToSize(formData.education, 180), 20, 200);
      doc.text("Certifications:", 10, 250);
      doc.text(doc.splitTextToSize(formData.certifications, 180), 20, 260);
      doc.text("Awards:", 10, 300);
      doc.text(doc.splitTextToSize(formData.awards, 180), 20, 310);
    } else if (id === "4") {
      doc.setFont("times", "bold");
      doc.setFontSize(22);
      doc.text(formData.name, 10, 20);
      doc.setFontSize(14);
      doc.text(formData.title, 10, 30);
      doc.setFontSize(12);
      doc.text(formData.address, 10, 40);
      doc.text(formData.phone, 10, 50);
      doc.text(formData.email, 10, 60);
      doc.text("Skills:", 10, 70);
      doc.text(doc.splitTextToSize(formData.skills, 180), 20, 80);
      doc.text("Experience:", 10, 110);
      doc.text(doc.splitTextToSize(formData.experience, 180), 20, 120);
      doc.text("Education:", 10, 160);
      doc.text(doc.splitTextToSize(formData.education, 180), 20, 170);
      doc.text("Certifications:", 10, 220);
      doc.text(doc.splitTextToSize(formData.certifications, 180), 20, 230);
      doc.text("Awards:", 10, 280);
      doc.text(doc.splitTextToSize(formData.awards, 180), 20, 290);
      doc.text("Hobbies:", 10, 330);
      doc.text(doc.splitTextToSize(formData.hobbies, 180), 20, 340);
    }

    doc.save(`${formData.name}_template${id}.pdf`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Template {id}</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h1>
          <ContentEditable
            html={formData.name}
            onChange={(e) => handleContentChange("name", e.target.value)}
          />
        </h1>
        <h2>
          <ContentEditable
            html={formData.title}
            onChange={(e) => handleContentChange("title", e.target.value)}
          />
        </h2>
        <p>
          <ContentEditable
            html={formData.address}
            onChange={(e) => handleContentChange("address", e.target.value)}
          />
        </p>
        <p>
          <ContentEditable
            html={formData.phone}
            onChange={(e) => handleContentChange("phone", e.target.value)}
          />
        </p>
        <p>
          <ContentEditable
            html={formData.email}
            onChange={(e) => handleContentChange("email", e.target.value)}
          />
        </p>
        <h3>Summary:</h3>
        <ContentEditable
          html={formData.summary}
          onChange={(e) => handleContentChange("summary", e.target.value)}
        />
        <h3>Skills:</h3>
        <ContentEditable
          html={formData.skills}
          onChange={(e) => handleContentChange("skills", e.target.value)}
        />
        <h3>Experience:</h3>
        <ContentEditable
          html={formData.experience}
          onChange={(e) => handleContentChange("experience", e.target.value)}
        />
        <h3>Education:</h3>
        <ContentEditable
          html={formData.education}
          onChange={(e) => handleContentChange("education", e.target.value)}
        />
        <h3>Certifications:</h3>
        <ContentEditable
          html={formData.certifications}
          onChange={(e) =>
            handleContentChange("certifications", e.target.value)
          }
        />
        <h3>Awards:</h3>
        <ContentEditable
          html={formData.awards}
          onChange={(e) => handleContentChange("awards", e.target.value)}
        />
        <h3>Hobbies:</h3>
        <ContentEditable
          html={formData.hobbies}
          onChange={(e) => handleContentChange("hobbies", e.target.value)}
        />
      </div>
      <button onClick={generatePDF} style={{ marginTop: "20px" }}>
        Update & Download PDF
      </button>
    </div>
  );
};

export default EditTemplate;
