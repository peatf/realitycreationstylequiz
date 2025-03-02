// app/layout.js
import './globals.css';

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
      <body>
        {children}
      </body>
    </html>
  );
}
