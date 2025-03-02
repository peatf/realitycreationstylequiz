import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the app directory page
    router.replace('/app');
  }, [router]);
  
  return <div>Redirecting...</div>;
}
