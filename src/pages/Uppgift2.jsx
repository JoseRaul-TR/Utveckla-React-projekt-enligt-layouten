import React from "react";
import Header from "../components/Component1Header";
import TagList from "../components/Component2TagList";
import PostList from "../components/Component3PostsList";

export default function Uppgift2() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex md:flex-row flex-col flex-grow">
        <PostList />
        <TagList />
      </div>
    </div>
  );
}
