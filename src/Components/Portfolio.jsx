/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Stack Overflow Clone",
    description:
      "This is a clone of old version of Stack overflow. Tech Stack - MongoDB, Express.js, React.js, Node.js",
    url: "https://rohan-stackoverflow-clone.netlify.app/",
  },
  {
    title: "KJ AMS Dashboard",
    description:
      "Collaboration to create an Attendance Management System Dashboard using React.",
    url: "https://github.com/Mys7erio/KJC-AMS-Dashboard",
  },
  {
    title: "KJ AMS Mobile Application",
    description:
      "This scans qr of the students from their ID card and update on the database, used on special event when manual attendance is difficult.",
    url: "https://github.com/mr0weird0guy/KJC-AMS-app",
  },
  {
    title: "Project Management System",
    description:
      "This helps in managing the workflow, contributors and tasks assigned to contributors. It is a 2nd year college project using VB.NET.",
    url: "https://github.com/mr0weird0guy/Project-Manager",
  },
  {
    title: "MIA Plubming Solutions Web Project",
    description:
      "As my internship task under Zaveri Ltd. I designed and completed the website with HTML, CSS, PHP and JS.",
    url: "https://github.com/mr0weird0guy/MIAPlumbingSolutions",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/mr0weird0guy/codespaces-rohan",
  },
  {
    title: "News and Articles website",
    description:
      "This website calls Times of New York and Google Maps API, to return articles and news based on the location of the neighbourhood provided.",
    url: "https://github.com/mr0weird0guy/articles-and-links",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
