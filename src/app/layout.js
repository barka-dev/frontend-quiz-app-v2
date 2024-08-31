import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <img src="/images/icon-accessibility.svg" alt="topic icon"/>
          <h1>Accessibility</h1>
          <img src="/images/icon-sun-dark.svg" class="sunmoonIcons" alt="sun icon"/>
          <input type="checkbox" name="theme" class="themeIcon" id="theme"/>
          <img src="/images/icon-moon-dark.svg" class="sunmoonIcons" alt="moon icon"/>
        </header>
        {children}
        </body>
    </html>
  );
}
