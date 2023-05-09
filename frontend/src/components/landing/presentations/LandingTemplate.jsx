import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LandingImage from "../../../assets/images/landing/age-viewer.jpg";
import "./LandingTemplate.scss";

const LandingTemplate = () => (
  <div className="landing-background">
    <div className="landing-border">
      <img src={LandingImage} alt="landing" className="landing-logo" />
      <div className="landing-header">
        <h2 className="landing-header--title">
          Apache AGE (Agens Graph Extension)
        </h2>
        <div className="landing-block" />
      </div>
      <ul className="landing-list">
        <li className="landing-list--items">
          The 1st Apache Open-Source Top-Level Project (TLP) integrating
          Relational Database and Graph technologies
        </li>
        <li className="landing-list--items">
          Apache AGE is a PostgreSQL extension that adds graph query
          functionality to PostgreSQL
        </li>
        <li className="landing-list--items">
          Through using Graph technologies such as the openCypher query
          specification and Graph-based data analysis algorithms, users can
          access, store, query and analyze graph data stored in relational
          database such as PostgreSQL.
        </li>
      </ul>
      <Link to="/age-viewer">
        <Button>Get Started</Button>
      </Link>
    </div>
  </div>
);

export default LandingTemplate;
