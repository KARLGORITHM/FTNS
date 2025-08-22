// app/_layout.jsx
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { ThemeProvider, ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}

function RootLayoutContent() {
  const { theme, themeType } = useContext(ThemeContext);

  // Android-specific: opaque status bar ensures icons respect barStyle
  const isAndroid = Platform.OS === 'android';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <StatusBar
        barStyle={themeType === 'dark' ? 'light-content' : 'dark-content'} // White icons in dark mode
        backgroundColor={theme.background} // Android background
        translucent={false} // Must be false on Android for barStyle to work
      />

      {/* Your app screens */}
      <Slot />
    </SafeAreaView>
  );
}





