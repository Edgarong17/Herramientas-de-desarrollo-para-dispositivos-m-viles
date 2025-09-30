import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Matricula() 
{
    return (
        <View>
            <Text style={styles.title}> Matricula: A01644488 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 16, fontWeight: "600", marginBottom: 8, alignContent: "center" },
});
