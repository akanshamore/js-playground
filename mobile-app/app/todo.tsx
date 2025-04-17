import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Todo App</Text>
      <Link href="/" style={styles.button}>
        Go Back
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    paddingTop: 50,
  },
  text: {
    color: "black",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
