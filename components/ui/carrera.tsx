import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Carrera() 
{
    return (
        <View>
            <Text style={styles.title}> Carrera: Ingeniería en Tecnologías Computacionales </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 16, fontWeight: "600", marginBottom: 8, textAlign: "center" },
});
