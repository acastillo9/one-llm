import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./components/main";
import { View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-zinc-800">
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
