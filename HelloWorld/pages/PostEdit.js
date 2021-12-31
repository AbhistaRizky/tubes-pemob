import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import Loading from '../components/Loading';
const PostEdit = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [textInputPost, setTextInputPost] = useState("");
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/posts/id/' + itemId);
            const json = await response.json();
            setPost(json.data[0]);
            setTextInputPost(json.data[0].post);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    const updateData = async () => {
        try {
            await fetch('http://10.0.2.2:3000/posts/id/' + itemId, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'Abhista',
                    post: textInputPost
                })
            });
        } catch (error) {
            console.error(error);
        } finally {
            navigation.navigate('Timeline');
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return loading
        ?
        (<Loading />)
        :
        (
            <View style={{ flex: 1, padding: 4 }}>

                <View style={{ backgroundColor: 'white', marginHorizontal: 4, marginBottom: 20, padding: 4 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={{ uri: 'http://10.0.2.2:3000/images/user.png' }}
                                style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>{post.username}</Text>
                            <Text>{post.post_date}</Text>
                        </View>
                    </View>
                    <View style={{ height: 400 }}>
                        <TextInput style={styles.input} onChangeText={text =>
                            setTextInputPost(text)} value={textInputPost} />
                    </View>
                </View>

                <TouchableOpacity onPress={() => updateData()} style={styles.button}>
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

export default PostEdit;