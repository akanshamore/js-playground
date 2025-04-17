import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Project Dashboard</Text>
      <View style={styles.linksContainer}>
        <Link href="/counter" style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Counter App</Text>
          </View>
        </Link>
        <Link href="/todo" style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Todo App</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0a7ea4",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  linksContainer: {
    width: "100%",
    gap: 16,
  },
  button: {
    width: "100%",
  },
  buttonContent: {
    backgroundColor: "#0a7ea4",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
