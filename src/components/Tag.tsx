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
      <h2>#{tagId}</h2>
      <h4>For you</h4>
      {posts
        .filter(({ body }) => body.includes(`#${tagId}`))
        .map(({ id, body }) => (
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
          </div>
        ))}
    </>
  );
}
