import { Text, View } from "react-native";
import { ILoader } from "./Loader.interface";

//
//

export const Loader: React.FC<ILoader> = () => (
  <View>
    <Text>Native Loading...</Text>
  </View>
);
