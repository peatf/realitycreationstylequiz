// app/page.js
'use client';

import dynamic from 'next/dynamic';
import { QuizProvider } from '@/context/QuizContext';

// Dynamically import the QuizContainer to avoid SSR issues
const QuizContainer = dynamic(() => import('@/components/quiz/QuizContainer'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return (
    <QuizProvider>
      <main>
        <QuizContainer />
      </main>
    </QuizProvider>
  );
}
