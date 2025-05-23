import React from "react";
import Post from "./Post";

export default function PostList() {
  const posts = [
    {
      title: "Post 1",
      body: "Coding can be an incredibly rewarding experience. There's a unique satisfaction in taking a complex problem, breaking it down into smaller, manageable parts, and then crafting elegant solutions using lines of code. Whether you're building a website, developing a mobile app, or working on artificial intelligence, the process of creation and problem-solving is deeply engaging. Don't be discouraged by the initial challenges; with practice and persistence, you'll unlock a powerful tool for bringing your ideas to life.",
    },
    {
      title: "Post 2",
      body: "Travel broadens the mind and nourishes the soul. Visiting new places, experiencing different cultures, and witnessing the beauty of our planet can be truly transformative. From the bustling streets of a vibrant city to the serene landscapes of untouched nature, each journey offers a unique perspective and a chance to learn and grow. Consider planning your next adventure – you might be surprised by what you discover, both externally and within yourself.",
    },
    {
      title: "Post 3",
      body: "In our fast-paced world, it's easy to get caught up in the hustle and bustle. Practicing mindfulness can help us slow down, appreciate the present moment, and cultivate a sense of inner peace. Simple techniques like mindful breathing, meditation, or simply paying attention to your senses can make a significant difference in your daily life. Taking a few moments each day to be present can reduce stress, improve focus, and enhance your overall well-being.",
    }
  ];

  return (
    <div className="p-4 md:w-3/4 w-full h-full flex flex-col flex-grap shrink-1 gap-2">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
