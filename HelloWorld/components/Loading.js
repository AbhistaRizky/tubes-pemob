import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Loading = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.loadingText}>
                Loading ...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loadingText: {
        fontSize: 36
    }
});

export default Loading;