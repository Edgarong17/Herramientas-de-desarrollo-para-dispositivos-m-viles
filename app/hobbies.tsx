import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Matricula() 
{
    return (
        <View>
                <Text style={styles.title}> Hobbies </Text>
                <Text style={styles.listItem}>Leer</Text>
                <Text style={styles.listItem}>Programar</Text>
                <Text style={styles.listItem}>Jugar videojuegos</Text>
                <Text style={styles.listItem}>Modelar en 3D</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 16, fontWeight: "600", marginBottom: 8, textAlign: "center" },
    listItem: { fontSize: 14, marginBottom: 4, textAlign: "center" },
});