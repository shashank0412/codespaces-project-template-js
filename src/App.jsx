/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Shashank Kumar Srivastava",
  title: "Web Developer & Programmer",
  email: "shashanksrivastav9800@gmail.com",
  email: "shashank.kumarsrivastava@studentambassador.com",
  gitHub: "https://github.com/shashank0412",
  instagram: "https://www.instagram.com/_invincible_aryan/",
  linkedIn: "https://www.linkedin.com/in/shashank-kumar-srivastava-5b9717224/",
  medium: "https://medium.com/@shashank_srivastava",
  twitter: "https://twitter.com/aryans_k14322",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
