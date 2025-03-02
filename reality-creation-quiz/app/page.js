// app/page.js
'use client';

import { QuizProvider } from '@/context/QuizContext';
import QuizContainer from '@/components/quiz/QuizContainer';

export default function Home() {
  return (
    <QuizProvider>
      <main>
        <QuizContainer />
      </main>
    </QuizProvider>
  );
}
