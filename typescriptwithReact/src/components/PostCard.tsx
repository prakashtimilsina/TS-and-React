import { PostProps } from "../types/types";

const PostCard = (props: PostProps) => {
  return (
    <div>
      <h2>{props.id}</h2>
      <span>
        <h2>{props.title}</h2>
      </span>
      <h2>{props.body}</h2>
    </div>
  );
};

export default PostCard;
