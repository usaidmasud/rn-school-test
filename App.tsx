import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Data Sekolah</Text>
      </View>
      <View>
        <TextInput />
      </View>
      <Text>helo there</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:12,
    backgroundColor: "#fff",
    marginTop: 40
  },
});
