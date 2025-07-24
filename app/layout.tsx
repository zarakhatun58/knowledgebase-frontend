import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
   title: 'AI Knowledgebase',
  description: 'Upload and search articles with AI-powered summarization.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
