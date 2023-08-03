import React, { useState, useEffect, useRef } from 'react';
import styles from '@/app/page.module.css'
import classnames from "classnames";
import _ from "lodash";

const targetParagraph = "Amidst the mists and coldest frosts, with stoutest wrists and loudest boasts.";
const initialTime = 0;

function Level4({ onComplete }: any) {
  const [inputText, setInputText] = useState("");
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const inputRef = useRef<any>(null);

  const startGame = () => {
    setInputText("");
    setTime(initialTime);
    setIsRunning(true);
    setIsCompleted(false);
    inputRef.current.focus();
  };

  const endGame = () => {
    setIsRunning(false);
    setIsCompleted(true);
    setWordsPerMinute(calculateWordsPerMinute());
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setInputText(value);

    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const calculateWordsPerMinute = () => {
    const words = inputText.trim().split(" ");
    const timeInMinutes = time / 60;
    return Math.round(words.length / timeInMinutes);
  };

  useEffect(() => {
    if (isRunning) {
      const timerId = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
        if (inputText.length === targetParagraph.length) {
          setIsRunning(false)
        }
      }, 1000);
      return () => clearTimeout(timerId);
    }
    else if (inputText.length === targetParagraph.length) {
      console.log("game end");
      endGame();
    }
  }, [isRunning, time]);




  return (
    <div className={styles["typing-test-game"]}>
      <h1 style={{margin: "20px 0"}}>Level 4 (NINJA)</h1>
      <div className={styles["target-paragraph"]}>
        {targetParagraph.split("").map((char, index) => (
          <span
            key={index}
            className={styles[classnames({
              "correct": char === inputText[index],
              "incorrect": char !== inputText[index],
            })]}
          >
            {char}
          </span>
        ))}
      </div>
      <span className={styles.note}>Note*: Press start to begin the round</span>
      <div className={styles["input-container"]}>
        <input
          className={styles.textarea}
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Start typing..."
          readOnly={!isRunning}
        />
        {!isRunning && (
          <button className={styles.btn} onClick={startGame} disabled={time !== initialTime}>
            Start
          </button>
        )}
      </div>
      {(isCompleted) && (
        <>
          <div className={styles["results"]}>
            <p>Time taken: {time} seconds</p>
            <p>Words per minute: {wordsPerMinute}</p>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn} onClick={startGame}>🔁 Retry</button>
            <button className={styles.btn} onClick={onComplete}>⏩ Next Level</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Level4;
