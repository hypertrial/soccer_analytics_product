import { useState, useEffect, useCallback } from "react";

interface ResponsiveState {
  isTinyMobile: boolean;
  isSmallMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktopSmall: boolean;
  isDesktopMedium: boolean;
  isDesktopLarge: boolean;
  screenWidth: number;
}

export function useResponsive(): ResponsiveState {
  const [responsiveState, setResponsiveState] = useState<ResponsiveState>(
    () => {
      if (typeof window === "undefined") {
        return {
          isTinyMobile: false,
          isSmallMobile: false,
          isMobile: false,
          isTablet: false,
          isDesktopSmall: false,
          isDesktopMedium: false,
          isDesktopLarge: true,
          screenWidth: 1200,
        };
      }

      const width = window.innerWidth;
      return {
        isTinyMobile: width <= 480,
        isSmallMobile: width <= 768 && width > 480,
        isMobile: width <= 768,
        isTablet: width <= 968 && width > 768,
        isDesktopSmall: width <= 1200 && width > 968,
        isDesktopMedium: width <= 1400 && width > 1200,
        isDesktopLarge: width > 1400,
        screenWidth: width,
      };
    }
  );

  const updateResponsiveState = useCallback((width: number) => {
    setResponsiveState((prevState) => {
      const newState = {
        isTinyMobile: width <= 480,
        isSmallMobile: width <= 768 && width > 480,
        isMobile: width <= 768,
        isTablet: width <= 968 && width > 768,
        isDesktopSmall: width <= 1200 && width > 968,
        isDesktopMedium: width <= 1400 && width > 1200,
        isDesktopLarge: width > 1400,
        screenWidth: width,
      };

      // Only update if state actually changed
      if (
        prevState.isTinyMobile !== newState.isTinyMobile ||
        prevState.isSmallMobile !== newState.isSmallMobile ||
        prevState.isMobile !== newState.isMobile ||
        prevState.isTablet !== newState.isTablet ||
        prevState.isDesktopSmall !== newState.isDesktopSmall ||
        prevState.isDesktopMedium !== newState.isDesktopMedium ||
        prevState.isDesktopLarge !== newState.isDesktopLarge ||
        Math.abs(prevState.screenWidth - newState.screenWidth) > 10 // Only update if width changed by more than 10px
      ) {
        return newState;
      }
      return prevState;
    });
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      updateResponsiveState(window.innerWidth);
    };

    // Use ResizeObserver if available for better performance
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === document.documentElement) {
            updateResponsiveState(window.innerWidth);
            break;
          }
        }
      });

      resizeObserver.observe(document.documentElement);

      return () => {
        resizeObserver.disconnect();
      };
    } else {
      // Fallback to resize event with improved throttling
      let timeoutId: ReturnType<typeof setTimeout>;
      let isThrottled = false;

      const throttledCheckScreenSize = () => {
        if (isThrottled) return;

        isThrottled = true;
        requestAnimationFrame(() => {
          checkScreenSize();
          timeoutId = setTimeout(() => {
            isThrottled = false;
          }, 100);
        });
      };

      window.addEventListener("resize", throttledCheckScreenSize, {
        passive: true,
      });

      return () => {
        window.removeEventListener("resize", throttledCheckScreenSize);
        clearTimeout(timeoutId);
      };
    }
  }, [updateResponsiveState]);

  return responsiveState;
}
