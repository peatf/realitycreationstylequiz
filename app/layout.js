// app/layout.js
import './globals.css';
import IFrameWrapper from './IFrameWrapper';

export const metadata = {
  title: 'Reality Creation Style Assessment',
  description: 'Discover your unique reality creation style and how you naturally manifest your desires.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Font for the title */}
        <link 
          href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body style={{ background: 'transparent' }}>
        <IFrameWrapper>
          {children}
        </IFrameWrapper>
      </body>
    </html>
  );
}
