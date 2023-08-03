'use client';

import React, { useState } from 'react';
import styles from '@/app/page.module.css'
import { useRouter } from 'next/navigation'
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';

const TypingTestGame = () => {
  const [currentLevel, setCurrentLevel] = useState(5);

  const router = useRouter()

  const handleLevelComplete = () => {
    if (currentLevel === 5) {
      router.push('/winner')
    } else {
      setCurrentLevel((level) => level + 1);
    }
  };

  const handleQuit = () => {
    alert('Thanks for playing the typing test.');
    router.push('/sayonara')
  };

  return (
    <>
      <div>
        {currentLevel === 1 && <Level1 onComplete={handleLevelComplete} onQuit={handleQuit} />}
        {currentLevel === 2 && <Level2 onComplete={handleLevelComplete} onQuit={handleQuit} />}
        {currentLevel === 3 && <Level3 onComplete={handleLevelComplete} onQuit={handleQuit} />}
        {currentLevel === 4 && <Level4 onComplete={handleLevelComplete} onQuit={handleQuit} />}
        {currentLevel === 5 && <Level5 onComplete={handleLevelComplete} onQuit={handleQuit} />}
      </div>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={handleQuit}>🚪 Exit</button>
      </div>
    </>
  );
};

export default TypingTestGame;
