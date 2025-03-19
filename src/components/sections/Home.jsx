import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState, useEffect } from "react";
import { styles } from "./utils/styles";

export const Home = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Full Stack MERN Developer";
  const typingSpeed = 100; // milliseconds per character
  const eraseSpeed = 50; // milliseconds per character when erasing
  const pauseTime = 2000; // pause time at full text

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, eraseSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className={`max-w-7xl mx-auto sm:px-4 ${styles.padding}`}>
          <div className="text-center z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Aashlesha Chitte
            </h1>
            <p className="text-gray-400 sm:px-4 text-lg mb-8 max-w-7xl mx-auto" style={{ textAlign: 'left' }}>
              <span className="font-bold"> I'm </span><span className="font-bold text-blue-500">{text}</span>
              <span className="animate-pulse">|</span> <br /> <br />
              For over three years at Successive Tech, I've dedicated myself to crafting reliable web applications using JavaScript technologies,
              working seamlessly across both front-end and back-end development environments. I find joy in writing clean, efficient code and have been
              fortunate to work with cutting-edge technologies throughout my career.
              <br /> <br />
              When I'm not coding, you'll find me exploring new places, hiking trails, enjoying music, or spending time with friends.
              I'm always eager to learn and grow as a developer, and I approach each project with curiosity and dedication to creating the best possible solution.
            </p>

            <div className="p-2.5 max-w-7xl">
              <p className="text-base">
                <a
                  href="https://raw.githubusercontent.com/Aashlesha-Chitte/my-portfolio/main/Aashlesha_Chitte.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center transition-colors duration-200"
                >
                  Download my resume
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                </a>
                {' '}for more details.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
