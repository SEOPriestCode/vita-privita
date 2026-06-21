"use client";

import { useEffect, useState } from "react";

export default function ChatWidget() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    // Load Tawk.to script
    const loadTawkScript = () => {
      if (typeof window !== "undefined" && !window.Tawk_API) {
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/63763889daff0e1306d7ed7d/default";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        const firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        script.onload = () => {
          setIsWidgetLoaded(true);
        };
      }
    };

    loadTawkScript();

    // Customize Tawk.to widget appearance and behavior
    const customizeWidget = () => {
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function() {
          setIsWidgetLoaded(true);
          
          // Smart display: hide on mobile initially, show on desktop
          if (window.innerWidth < 768) {
            window.Tawk_API.hideWidget();
          }

          // Set visitor info if available
          window.Tawk_API.visitor = {
            name: '',
            email: ''
          };
        };

        // Smart scroll-based visibility
        let lastScrollY = window.scrollY;
        let scrollTimeout;

        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
          
          clearTimeout(scrollTimeout);
          
          scrollTimeout = setTimeout(() => {
            if (window.Tawk_API) {
              // Show widget when scrolling up or after scrolling down 500px
              if (scrollDirection === 'up' || currentScrollY > 500) {
                window.Tawk_API.showWidget();
              } else if (currentScrollY < 300 && window.innerWidth < 768) {
                window.Tawk_API.hideWidget();
              }
            }
          }, 100);

          lastScrollY = currentScrollY;
        };

        // Handle window resize
        const handleResize = () => {
          if (window.Tawk_API) {
            if (window.innerWidth >= 768) {
              window.Tawk_API.showWidget();
            } else {
              window.Tawk_API.hideWidget();
            }
          }
        };

        // Add event listeners
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleResize);
          clearTimeout(scrollTimeout);
        };
      }
    };

    // Wait for Tawk_API to be available
    const checkTawkAPI = setInterval(() => {
      if (window.Tawk_API) {
        clearInterval(checkTawkAPI);
        customizeWidget();
      }
    }, 100);

    return () => {
      clearInterval(checkTawkAPI);
    };
  }, []);

  return null; // This component doesn't render anything visible
}
