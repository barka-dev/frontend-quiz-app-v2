
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";


// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Quiz App",
  description: "Frontend Quiz App",
};

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
