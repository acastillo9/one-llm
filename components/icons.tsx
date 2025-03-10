import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ComponentProps } from "react";

type IconProps = Omit<ComponentProps<typeof FontAwesome>, "name">;

export const SendIcon = (props: IconProps) => (
  <FontAwesome name="send" size={24} color="black" {...props} />
);
