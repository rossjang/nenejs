import type { ReactNode } from "react";

export const metadata = {
  title: "My Nene App",
  description: "Built with nene.js - The AI-native full-stack framework",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
