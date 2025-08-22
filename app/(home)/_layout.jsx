// app/(home)/_layout.jsx
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeLayout({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      {children} {/* This is critical: renders index.jsx inside this layout */}
    </View>
  );
}









