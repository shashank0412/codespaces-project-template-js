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

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "src/images/image2.jpg";

const imageAltText = "Shashank Kumar Srivastava";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Analysis Of Sample Superstore",
    description: "IBM Edunet Data Analysis Internship Project",
    url: "https://github.com/shashank0412/Analysis-of-sample-superstore-",
  },
  {
    title: "College Network Topology",
    description: "Cisco Cybersecurity Internship Project",
    url: "https://github.com/shashank0412/Cisco-Cybersecurity-Virtual-Internship-2023",
  },
  {
    title: "Digital Clock",
    description: "Digital CLock Using C++",
    url: "https://github.com/shashank0412/Digital-Clock",
  },
  {
    title: "Task",
    description: "Internship Task",
    url: "https://github.com/shashank0412/TAIRP",
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
