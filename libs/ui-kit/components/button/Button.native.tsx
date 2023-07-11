import { Text, TouchableOpacity } from "react-native";
import { IButton } from "./Button.interface";

//
//

export const Button: React.FC<IButton> = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{children}</Text>
  </TouchableOpacity>
);
