import { useState } from "react";
import store from "../store/store.ts";
import type { Post } from "../store/store.ts";
import { Link } from "react-router-dom";

export default function Post() {
  const [body, setBody] = useState("");
  const { posts, addPost, resetPost } = store();

  const onBodyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody((e.target as HTMLInputElement).value);
  };

  // function scope. The postBody is not related with body useState("")
  const addTagsToPostBody = (postBody: string) =>
    postBody.split(" ").map((word, index) =>
      word.includes("#") ? (
        <Link to={`/user/socialmedia/tag/${word.slice(1)}`} key={index}>
          {word}{" "}
        </Link>
      ) : (
        <span key={index}>{word} </span>
      )
    );

  const handleAddPost = () => {
    if (body != "") {
      const newPost: Post = {
        id: posts.length + 1,
        body: body,
      };

      addPost(newPost);
      setBody("");
    }
  };

  const handleReset = () => {
    resetPost();
  };

  return (
    <>
      <div>
        <p>Write something </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            style={{ width: "100%", padding: "10px 15px", fontSize: "18px" }}
            type="text"
            value={body}
            onInput={onBodyInput}
          />
          <button onClick={handleAddPost}>Post</button>
          <button style={{ background: "grey" }} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      {posts.map(({ id, body }) => (
        <p
          style={{
            fontSize: "18px",
            padding: "10px",
            background: "white",
            color: "black",
            borderRadius: "8px",
          }}
          key={id}
        >
          {addTagsToPostBody(body)}
        </p>
      ))}
    </>
  );
}