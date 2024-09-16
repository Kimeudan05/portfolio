import React from "react";
// import "./AboutUs.css"; // Add this CSS file for styling

const AboutUs = () => {
  return (
    <main className="about-container">
      <section className="about-content">
        <h1>About Me</h1>
        <p>
          Hello! I’m <strong>Kimeu Daniel</strong>, a passionate and
          detail-oriented frontend developer with a strong foundation in
          creating beautiful, responsive websites. I specialize in crafting
          clean, modern, and intuitive user interfaces using technologies like
          React, HTML5, CSS3, and JavaScript.
        </p>
        <p>
          With a deep interest in design and user experience, I’m constantly
          learning and improving my skills to build engaging and accessible web
          applications. My goal is to translate ideas into functional and
          aesthetically pleasing digital experiences.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>React.js, Redux</li>
          <li>Responsive Design & CSS Frameworks (Bootstrap, Tailwind)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Cross-browser compatibility and performance optimization</li>
          <li>API Integration and RESTful Services</li>
          <li>Basic UX/UI Design</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <p>
          Over the past few years, I have worked on multiple frontend projects
          ranging from personal websites to complex web applications. I have
          collaborated with designers, backend developers, and clients to
          deliver seamless and functional interfaces.
        </p>
        <p>Some of my key projects include:</p>
        <ul>
          <li>
            <strong>Rock Paper Scissors Game</strong>: A fun game built using
            JavaScript, showcasing my skills in DOM manipulation and logic.
          </li>
          <li>
            <strong>Calculator App</strong>: A responsive calculator app that
            highlights my proficiency in CSS Grid and Flexbox.
          </li>
          <li>
            <strong>Tic Tac Toe Game</strong>: Demonstrates my understanding of
            React components and state management.
          </li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>Let's Work Together</h2>
        <p>
          I’m always open to new challenges and opportunities to collaborate.
          Whether you need a simple landing page or a dynamic web application,
          I’m here to help bring your vision to life.
        </p>
        <p>
          Feel free to <a href="/contacts">get in touch</a> and let’s build
          something great together!
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
