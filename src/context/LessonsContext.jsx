import { createContext, useContext, useState, useEffect } from 'react';
import { lessonsData } from '../data/lessons';

const LessonsContext = createContext();

export const LessonsProvider = ({ children }) => {
  const [lessons, setLessons] = useState(lessonsData);
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('kidslearn-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('kidslearn-progress', JSON.stringify(progress));
  }, [progress]);

  return (
    <LessonsContext.Provider value={{ lessons, setLessons, progress, setProgress }}>
      {children}
    </LessonsContext.Provider>
  );
};

export const useLessons = () => useContext(LessonsContext);