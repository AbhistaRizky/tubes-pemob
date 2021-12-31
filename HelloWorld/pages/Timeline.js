import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PostLists from "../components/PostLists";
import React from "react";

const Timeline = ({ route, navigation }) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);


    const getPosts = async () => {
        setLoading(true);
        const resPosts = await fetch(`http://10.0.2.2:3000/posts`);
        const postsData = await resPosts.json();
        console.log(postsData);
        setPosts(postsData.data);

        setLoading(false);
    }


    const deletePost = async (id) => {

        try {
            const response = await fetch('http://10.0.2.2:3000/posts/id/' + id, {
                method:
                    'DELETE'
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        } finally {
            getPosts();
        }

    }

    useEffect(() => {
        getPosts();
    }, [])

    const [Refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        getPosts();
        setRefreshing(false);
    }

    return loading ? (<Loading />) : (
        <PostLists
            Refreshing={Refreshing}
            onRefresh={onRefresh}
            posts={posts} navigation={navigation} deletePost={deletePost} />)

}

export default Timeline;