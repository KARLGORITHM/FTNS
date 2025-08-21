import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import { Colors } from "../constants/Colors";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1️⃣ Get system default
  const colorScheme = Appearance.getColorScheme(); // 'light' or 'dark'
  
  // 2️⃣ State to hold theme type ('light' or 'dark')
  const [themeType, setThemeType] = useState(colorScheme);

  // 3️⃣ State for actual colors
  const [theme, setTheme] = useState(
    colorScheme === "dark" ? Colors.dark : Colors.light
  );

  // 4️⃣ Listen for system changes only if user hasn't overridden
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (!userOverride) {
        setThemeType(colorScheme);
        setTheme(colorScheme === "dark" ? Colors.dark : Colors.light);
      }
    });
    return () => subscription.remove();
  }, []);

  // 5️⃣ Track if user has manually overridden theme
  const [userOverride, setUserOverride] = useState(false);

  // 6️⃣ Function to toggle theme manually
  const toggleTheme = () => {
    const newThemeType = themeType === "dark" ? "light" : "dark";
    setThemeType(newThemeType);
    setTheme(newThemeType === "dark" ? Colors.dark : Colors.light);
    setUserOverride(true);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, themeType, toggleTheme, setThemeType, setUserOverride }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
