import React, { useState, useRef, useEffect } from "react";

// Data untuk modul skill
const skills = [
  { skill: "HTML", level: "90%", icon: "fab fa-html5", color: "#E44D26" },
  { skill: "CSS", level: "85%", icon: "fab fa-css3-alt", color: "#1572B6" },
  { skill: "JavaScript", level: "80%", icon: "fab fa-js", color: "#F7DF1E" },
  { skill: "React", level: "75%", icon: "fab fa-react", color: "#61DAFB" },
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");
  const [newImage, setNewImage] = useState(null); // Gambar proyek baru
  const skillBarsRef = useRef([]);

  // Animasi skill bar
  useEffect(() => {
    const observerOptions = { threshold: 0.5 };

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    }, observerOptions);

    skillBarsRef.current.forEach((bar) => {
      if (bar) {
        skillObserver.observe(bar);
      }
    });

    return () => {
      skillBarsRef.current.forEach((bar) => {
        if (bar) {
          skillObserver.unobserve(bar);
        }
      });
    };
  }, []);

  const handleAddProject = () => {
    if (newProject && newImage) {
      setProjects([...projects, { name: newProject, image: newImage }]);
      setNewProject("");
      setNewImage(null);
    } else {
      alert("Please enter a project name and upload an image!");
    }
  };

  const handleDeleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file)); // Menyimpan URL gambar sementara
    }
  };

  const getSkillBarColor = (level) => {
    const percentage = parseInt(level);
    if (percentage <= 60) {
      return "#E44D26"; // Merah
    } else if (percentage <= 80) {
      return "#F7DF1E"; // Kuning
    } else {
      return "#4CAF50"; // Hijau
    }
  };

  return (
    <div className="container my-5">
      {/* Bagian Skills */}
      <section className="skills mb-5">
        <h3 className="text-center mb-4">Skills</h3>
        <div className="row text-center">
          {skills.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="skill-box p-4 border rounded shadow-sm">
                <h5>{item.skill}</h5>

                {/* Ikon skill */}
                <div className="mb-3">
                  <i
                    className={`${item.icon} fa-3x skill-icon`}
                    style={{ color: item.color, fontSize: "3rem" }}
                    title={item.skill}
                  ></i>
                </div>

                {/* Kontainer skill bar */}
                <div
                  className="skill-bar-container bg-light rounded-pill mt-3 position-relative"
                  style={{ height: "12px" }}
                >
                  {/* Label level skill */}
                  <span
                    className="skill-level-label position-absolute"
                    style={{
                      left: item.level,
                      top: "-25px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      transform: "translateX(-50%)",
                      color: getSkillBarColor(item.level),
                    }}
                  >
                    {item.level}
                  </span>

                  {/* Skill bar */}
                  <div
                    ref={(el) => (skillBarsRef.current[index] = el)}
                    className="skill-bar rounded-pill"
                    style={{
                      "--skill-width": item.level,
                      backgroundColor: getSkillBarColor(item.level),
                    }}
                  ></div>
                </div>

                {/* Deskripsi level */}
                <small className="text-muted mt-2 d-block">{item.level}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Proyek */}
      <section className="projects">
        {/* <h3 className="mb-4">My Projects</h3> */}

      

        {/* Placeholder jika tidak ada proyek */}
        {projects.length === 0 && (
          <p className="text-center text-muted">No projects added yet.</p>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
