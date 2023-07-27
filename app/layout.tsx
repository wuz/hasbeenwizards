import { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/registry'
import styled from "styled-components";
import GlobalStyle from './GlobalStyles';
import { Analytics } from '@vercel/analytics/react';
 
export const metadata: Metadata = {
  title: 'Welcome - HasBeenWizards',
  description: 'HasBeenWizards is the home of Conlin Durbin &mdash; a professional dungeon master, Twitch streamer, and TTRPG content creator.',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
            />
            <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&family=Metal+Mania&display=swap"
            rel="stylesheet"
            />
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
            <StyledComponentsRegistry>
        <GlobalStyle />
        {children}
      <Analytics />
      </StyledComponentsRegistry>
            </body>
      </html>
    )
  }