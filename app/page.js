// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { QuizProvider } from '@/context/QuizContext';
import QuizContainer from '@/components/quiz/QuizContainer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Try to initialize anything that might be causing errors
      setIsLoaded(true);
    } catch (err) {
      console.error("Error initializing page:", err);
      setError(err.message);
    }
  }, []);

  if (error) {
    return <div className="p-8 text-red-600">Something went wrong: {error}</div>;
  }

  if (!isLoaded) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <QuizProvider>
      <main>
        <QuizContainer />
      </main>
    </QuizProvider>
  );
}
