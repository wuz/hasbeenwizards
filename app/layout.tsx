import { Metadata } from "next";
import "./app.css";
import { Analytics } from "@vercel/analytics/react";
import { themeClass } from "@/lib/theme.css";

export const metadata: Metadata = {
  title: "Welcome - HasBeenWizards",
  description:
    "HasBeenWizards is the home of Conlin Durbin &mdash; a professional dungeon master, Twitch streamer, and TTRPG content creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={themeClass}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
