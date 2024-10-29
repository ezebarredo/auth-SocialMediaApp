import { useState } from "react";
import store from "../store/store.ts";
import type { Post } from "../store/store.ts";
import { Link } from "react-router-dom";

export default function Post() {
  const [body, setBody] = useState("");
  const { posts, addPost, deletePost, resetPost } = store();

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

  const handleDeletePost = (id: number) => {
    deletePost(id);
  };

  return (
    <>
      <div>
        <h4>Label posts with # to explore similar content</h4>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            style={{
              width: "100%",
              padding: "10px 15px",
              fontSize: "18px",
            }}
            type="text"
            placeholder="What are you thinking?"
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            padding: "5px 15px",
            background: "white",
            color: "black",
            borderRadius: "8px",
            margin: "20px 0px",
          }}
        >
          <p key={id}>{addTagsToPostBody(body)}</p>
          <button
            style={{
              background: "grey",
              padding: "2px",
              borderRadius: "100%",
              width: "30px",
              height: "30px",
            }}
            onClick={() => handleDeletePost(id)}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}
