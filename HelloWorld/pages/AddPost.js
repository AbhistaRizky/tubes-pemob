import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const AddPost = ({ route, navigation }) => {

    const [post, setPost] = useState("");
    const username = "Abhista";

    const sendPost = async () => {
        try {
            await fetch('http://10.0.2.2:3000/posts/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    username,
                    post
                })
            });
        } catch (error) {
            console.error(error);
        } finally {
            navigation.navigate('Timeline');
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Post</Text>
            <TextInput style={styles.input} onChangeText={(text) => { setPost(text) }} value={post} />
            <TouchableOpacity onPress={() => sendPost()} style={styles.button}>
                <Text style={styles.addText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#000000'
    },
    input: {
        height: 300,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#233252'
    },
    addText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});


export default AddPost;