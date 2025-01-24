import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Read Nest",
  description: "readnest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/app/favicon.ico" sizes="any" />
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A]`}
      >
       <Navbar></Navbar>
      <div className="min-h-[calc(100vh-10rem)]  container mx-auto w-11/12 text-white">
      {children}
      </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
