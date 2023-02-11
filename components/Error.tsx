import { Text } from "react-native";

interface Props {
  msg: string;
}

export default function Error({ msg }: Props) {
  return <Text style={{ color: "white" }}>{msg}</Text>;
}
