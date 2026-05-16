import { RegionProvider } from "@/context/RegionContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Vita Privita | The Art of Sensual Pleasure",
  description: "Exclusive Outcall Massage - Professional, Discreet, Confidential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-light text-white bg-black">
        <RegionProvider>
          <Nav />
          <main className="pt-[72px] min-h-screen">
            {children}
          </main>
          <Footer />
        </RegionProvider>
      </body>
    </html>
  );
}
