import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:it22@heritageit.edu.in">
        <Button>Contact: it22@heritageit.edu.in</Button>
      </a>
    </div>
  );
};

export default Contact;
