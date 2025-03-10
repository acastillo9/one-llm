import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "./header";
import Chat from "./chat";
import Prompt from "./prompt";

export default function Main() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-col flex-1"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <Header />
      <Chat />
      <Prompt />
    </View>
  );
}
