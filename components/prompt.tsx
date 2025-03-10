import { Pressable, TextInput, View } from "react-native";
import { SendIcon } from "./icons";
import { useState } from "react";

export default function Prompt() {
  const [value, setValue] = useState("");

  return (
    <View className="flex-col px-4">
      <TextInput
        className="bg-neutral-700 p-4 rounded-full color-white mb-3"
        placeholder="Message One LLM"
        placeholderTextColor="#a3a3a3"
        value={value}
        onChangeText={setValue}
      />
      <View className="flex-row justify-end">
        <Pressable>
          <View
            className={`w-10 h-10 rounded-full justify-center items-center ${value ? "bg-yellow-400" : "bg-yellow-600"}`}
          >
            <SendIcon size={20} color="white" />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
