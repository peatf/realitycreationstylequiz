// app/page.js
'use client';

import { useEffect, useState } from 'react';
import { QuizProvider } from '@/context/QuizContext';
import dynamic from 'next/dynamic';

// Import QuizContainer with SSR disabled
const QuizContainer = dynamic(() => import('@/components/quiz/QuizContainer'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading...</div>
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render client-side
  if (!isMounted) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <QuizProvider>
      <main>
        <QuizContainer />
      </main>
    </QuizProvider>
  );
}
