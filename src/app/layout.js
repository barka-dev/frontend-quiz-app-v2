import { DataProvider } from './DataContext';
import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "Frontend Quiz App",
  description: "Frontend Quiz App",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <DataProvider>
          <Header/>
          <main>
            {children}
          </main>
        </DataProvider>
      </body>
    </html>
  );
}
