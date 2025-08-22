// contexts/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native"; // Allows us to detect system theme (light/dark)
import { Colors } from "../constants/Colors"; // Import your color palettes

// 1️⃣ Create the context object
export const ThemeContext = createContext();

/**
 * 2️⃣ ThemeProvider component
 * Wrap your app with this provider in _layout.jsx
 * It will make theme values accessible to all children
 */
export const ThemeProvider = ({ children }) => {
  // Get the system color scheme ('light' or 'dark')
  const colorScheme = Appearance.getColorScheme(); 
  
  // State to hold which theme is active ('light' or 'dark')
  const [themeType, setThemeType] = useState(colorScheme);
  
  // State to hold the actual colors based on the theme
  const [theme, setTheme] = useState(
    colorScheme === "dark" ? Colors.dark : Colors.light
  );

  // Flag to know if the user manually switched theme
  const [userOverride, setUserOverride] = useState(false);

  /**
   * 3️⃣ Listen for system theme changes
   * Only apply if user hasn't manually overridden theme
   */
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (!userOverride) { // Don't override if user selected theme manually
        setThemeType(colorScheme);
        setTheme(colorScheme === "dark" ? Colors.dark : Colors.light);
      }
    });

    // Clean up listener when component unmounts
    return () => subscription.remove();
  }, [userOverride]);

  /**
   * 4️⃣ Function to toggle theme manually
   * Can be used in your Settings page
   */
  const toggleTheme = () => {
    const newThemeType = themeType === "dark" ? "light" : "dark";
    setThemeType(newThemeType);
    setTheme(newThemeType === "dark" ? Colors.dark : Colors.light);
    setUserOverride(true); // Mark that user manually set theme
  };

  // 5️⃣ Provide the theme, type, and toggle function to children
  return (
    <ThemeContext.Provider
      value={{ theme, themeType, toggleTheme, setThemeType, setUserOverride }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * 6️⃣ Custom hook for consuming the theme
 * Allows pages to do: const { theme, toggleTheme } = useTheme();
 */
export const useTheme = () => useContext(ThemeContext);
