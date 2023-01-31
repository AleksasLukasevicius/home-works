import React from "react";

export const PostItem = (props: any) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>

      <div className="post-button">
        <button>Delete</button>
      </div>
    </div>
  );
};
