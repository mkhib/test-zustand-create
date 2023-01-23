import { TextInput, View } from "react-native";
import { useTestStore } from "../zustand/useTestStore";

const Input = () => {
  const text = useTestStore((state) => state.text);
  const setText = useTestStore((state) => state.setText);

  return (
    <View>
      <TextInput value={text} onChangeText={setText} placeholder="Text" />
    </View>
  );
};

export default Input;
