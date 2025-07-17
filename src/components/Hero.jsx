import React, { useState, useEffect } from "react";
import "./styling/Hero.css";
const words = ["problem solver", "developer", "lifelong learner", "team player", "innovator"];

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[index];
    const type = () => {
      setText((prev) =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );

      setSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed]);

  return (
    <section id="hero" className="hero">
      <h1>
        Hello, I'm <span className="color-span">Ansh Gandhi</span>
      </h1>
      <h2 className="rotating-text">
        I am a <span className="typewriter">{text}</span>
        <span className="cursor">|</span>
      </h2>
    </section>
  );
}

export default Hero;
