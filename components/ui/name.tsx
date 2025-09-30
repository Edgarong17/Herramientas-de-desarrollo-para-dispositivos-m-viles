import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Name() 
{
    return (
        <View>
            <Text style={styles.title}> Nombre: Edgar Osvaldo Navarro Garcia </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 16, fontWeight: "600", marginBottom: 8, alignContent: "center" },
});
