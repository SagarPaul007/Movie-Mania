import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Movie Mania - Find trending movies",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}