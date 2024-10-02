import React, { useState, useEffect, useCallback } from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <h1>Hello I'm <span className="name">Jason Tam</span></h1>
      <h2>A Software Developer</h2>
      <p>Studying at Western University ...</p>
    </div>
  );
};

export default Intro;