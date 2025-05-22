import React from "react";
import Header from "../components/HeaderComponent1";
import TagList from "../components/TagListComponent2";
import PostList from "../components/PostsListComponent3";

export default function Uppgift3() {
  return (
    <div className="">
      <Header />
      <div className="">
        <TagList />
        <PostList />
      </div>
    </div>
  );
}
