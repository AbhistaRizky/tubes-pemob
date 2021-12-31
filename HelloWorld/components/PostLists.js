import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView, RefreshControl } from "react-native";

const PostLists = ({ navigation, posts, deletePost, Refreshing, onRefresh }) => {

    return (
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <View style={styles.addContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('AddPost')} style={styles.addButton}>
                    <Text style={styles.addText}>Add New Post</Text>
                </TouchableOpacity>
            </View>

            {posts.map((item) => (
                <TouchableOpacity onPress={() => navigation.navigate('PostEdit',
                    { itemId: item.post_id })} key={item.post_id}>
                    <View style={styles.postCard}>
                        <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                            <View>
                                <Image source={{ uri: 'http://10.0.2.2:3000/images/user.png' }}
                                    style={styles.postImage} />
                            </View>
                            <View>
                                <View style={{ marginLeft: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-between' }}>
                                    <Text style={styles.postUser}>{item.username}</Text>
                                    <TouchableOpacity onPress={() => deletePost(item.post_id)} style={styles.deleteButton}>
                                        <Text style={styles.deleteText}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text>{item.post_date}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postContent}>{item.post}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
            }

        </ScrollView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    postCard: { backgroundColor: 'white', marginBottom: 20, padding: 4, borderRadius: 8 },
    postImage: { width: 60, height: 60, resizeMode: 'contain' },
    postUser: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    postContent: {
        fontSize: 24
    },
    addContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "flex-end",
        marginBottom: 30
    },
    addButton: {
        height: 40,
        width: 120,
        backgroundColor: "#233252",
        borderRadius: 8,
        paddingVertical: 10,

    },

    deleteButton: {
        height: 35,
        width: 60,
        backgroundColor: "#990000",
        borderRadius: 5,
        paddingVertical: 5,
    },
    deleteText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14
    },
    addText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default PostLists;