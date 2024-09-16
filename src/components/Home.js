import React from "react";
// import "./Home.css"; // Add this CSS file for styling

const Home = () => {
  return (
    <main className="container-fluid home-container">
      <div className="home-content">
        <div className="image-container">
          <img src="../images/masila.jpg" alt="Images" className="img" />
        </div>
        <h1 className="company-title">Kimeu Daniel Tech Solutions</h1>
        <p className="description">
          This is a company started with the aim to aid in building appealing
          websites for many users.
        </p>
        <p className="description">
          To make that happen, we incorporate other team members to ensure
          everything works perfectly.
        </p>
      </div>
      <div className="marquee-container">
        <div className="marquee">
          <p className="fs-4 text-primary ">
            Building appealing websites | Ensuring user satisfaction | Creating
            seamless experiences
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
