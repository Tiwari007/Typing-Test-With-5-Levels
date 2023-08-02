'use client';

import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';
// import Sayonara from './Sayonara';

const TypingTestGame = () => {
  const [currentLevel, setCurrentLevel] = useState(1);

  // const router = useRouter()

  const handleLevelComplete = () => {
    if (currentLevel === 5) {
      alert('Congratulations! 🎇 You have completed all levels.');
      setCurrentLevel(1);
    } else {
      setCurrentLevel((level) => level + 1);
    }
  };

  const handleQuit = () => {
    alert('Thanks for playing the typing test.');
    setCurrentLevel(1);
    // router.push('/Sayonara')
  };

  return (
    <div>
      {currentLevel === 1 && <Level1 onComplete={handleLevelComplete} onQuit={handleQuit} />}
      {currentLevel === 2 && <Level2 onComplete={handleLevelComplete} onQuit={handleQuit} />}
      {currentLevel === 3 && <Level3 onComplete={handleLevelComplete} onQuit={handleQuit} />}
      {currentLevel === 4 && <Level4 onComplete={handleLevelComplete} onQuit={handleQuit} />}
      {currentLevel === 5 && <Level5 onComplete={handleLevelComplete} onQuit={handleQuit} />}
    </div>
  );
};

export default TypingTestGame;
