import { useState, useEffect } from "react";
import { Section, Box } from "./components";

import "./App.css";

function App() {
  const [isGhostVisible, setIsGhostVisible] = useState(true);
  const [count, setCount] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGhostVisible((prev) => !prev);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count <= 0) return;

    const intervalId = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <main className="main-container">
      <Section title="1" />
      <Section title="2">
        <Box className="blue-box" />
      </Section>
      <Section title="3">
        <img src="assets/meme.webp" alt="meme" />
      </Section>
      <Section title="4">
        <div className="box-container">
          {Array.from({ length: 100 }).map((_, i) => (
            <Box key={i} className="red-box" />
          ))}
        </div>
      </Section>
      <Section title="5">
        <p className={`ghost ${isGhostVisible ? "" : "hidden"}`}>👻</p>
      </Section>
      <Section title="6">
        <p>I&apos;m a magician. If I hover over a rabbit, it will dissapear!</p>
        <div className="rabbit-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="rabbit">
              🐇
            </span>
          ))}
        </div>
      </Section>
      <Section className={`destruct ${count === 0 ? "red" : ""}`}>
        {count === 0 ? (
          Array.from({ length: 500 }).map((_, i) => (
            <span key={i} className="bomb">
              💣
            </span>
          ))
        ) : (
          <p>{`This page will self-destruct in ${count} seconds.`}</p>
        )}
      </Section>
    </main>
  );
}

export default App;
