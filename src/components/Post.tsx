import { useState } from "react";
import store from "../store/store.ts";
import type { Post } from "../store/store.ts";

export default function Post() {
  const [inputValue, setInputValue] = useState("");
  const { posts, addPost } = store();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const postAddedTags = (inputValue: string) => {
    const post = [inputValue];
    const postCopy = [...post];
    const findTags = postCopy
      .toString()
      .split(" ")
      .filter((tag) => tag.startsWith("#"));
    const convertTagToAnchor = findTags.map((tag) => `<a>${tag}</a>`);
    const replaceTagForAnchor = postCopy
      .toString()
      .split(" ")
      .map((element) =>
        element.includes("#")
          ? convertTagToAnchor.find((anchor) => anchor.includes(element))
          : element
      )
      .join(" ");
    return replaceTagForAnchor;
  };

  const handlePost = () => {
    if (inputValue != "") {
      const convertInputToTextWithTags = postAddedTags(inputValue);
      console.log("Type of processed:", typeof convertInputToTextWithTags); // string

      const newPost: Post = {
        id: posts.length + 1,
        body: convertInputToTextWithTags,
      };

      addPost(newPost);
      setInputValue("");
    }
  };

  // const handleReset = () => {
  //   setPosts([]);
  // };

  return (
    <>
      <div>
        <p>Write something </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            style={{ width: "100%", padding: "10px 15px", fontSize: "18px" }}
            type="text"
            value={inputValue}
            onInput={handleInput}
          />
          <button onClick={handlePost}>Post</button>
          {/* <button style={{ background: "grey" }} onClick={handleReset}>
            Reset
          </button> */}
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
          dangerouslySetInnerHTML={{ __html: body }}
        >
          {/* {body} */}
        </p>
      ))}
    </>
  );
}
