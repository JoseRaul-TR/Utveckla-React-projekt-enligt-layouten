import React from "react";
import Post from "./Post";

export default function PostList() {
    const posts = [
        { title: 'First post', body: "This is my first post and I don't have much to say yet." },
        { title: 'Second post', body: "This is the second post. Still nothing to say..." },
        { title: 'Third post', body: "This is the third post and nothing has changed since the last one..." },
    ];

    return (
        <div className="">
            {posts.map((post, index) => (
                <Post key={index} title={post.title} body={post.body} />
            ))}
        </div>
    );
}