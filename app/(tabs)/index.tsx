import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Carrera from "../../components/ui/carrera";
import Hobbies from "../../components/ui/hobbies";
import Matricula from "../../components/ui/matricula";
import Name from "../../components/ui/name";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Herramientas de desarrollo para dispositivos móviles Act1 </Text>
      <Name />
      <Matricula />
      <Carrera /> 
      <Hobbies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12, textAlign: "center" },
  logo: { width: 80, height: 80, marginBottom: 12 },
  text: { fontSize: 16, marginBottom: 16 },
  button: {
    backgroundColor: "#222",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 6,
  },
  reset: { backgroundColor: "#666" },
  buttonText: { color: "#fff", fontWeight: "600" },
});
