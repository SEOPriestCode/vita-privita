import { RegionProvider } from "@/context/RegionContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RegionSelector from "@/components/RegionSelector";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChatWidget from "@/components/ChatWidget";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('vp_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className="antialiased font-light text-white bg-black">
        <ThemeProvider>
          <RegionProvider>
            <RegionSelector />
            <Nav />
            <div className="pt-[72px]">
              <Breadcrumbs />
              <main className="min-h-screen">
                {children}
              </main>
            </div>
            <Footer />
            <ChatWidget />
          </RegionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
