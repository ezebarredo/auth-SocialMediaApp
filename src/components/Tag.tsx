import store from "../store/store.ts";
import { Link, useParams } from "react-router-dom";

export default function Tag() {
  const { posts } = store();
  let { tagId } = useParams();

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

  return (
    <>
      <h2>Tag name: #{tagId}</h2>
      {posts
        .filter(({ body }) => body.includes(tagId))
        .map(({ id, body }) => (
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
