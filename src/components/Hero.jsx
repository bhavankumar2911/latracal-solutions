import React from "react";
import Form from "./Form";

const Hero = ({ students, setStudents }) => {
  return (
    <section className="hero">
      {/* left */}
      <div className="left">
        <img
          src="/hero-image.svg"
          alt="attendence illustration"
          className="hero-image"
        />
      </div>

      {/* right */}
      <div className="right">
        <Form students={students} setStudents={setStudents} />
      </div>
    </section>
  );
};

export default Hero;
