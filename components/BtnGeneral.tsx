import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';

interface Props {
  children: string,
  handlePress: any
}

export default function BtnDescription({children, handlePress} : Props) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e8e8e8",
    borderRadius: 5,
    padding: 5,
    marginTop: 15
  },
});
