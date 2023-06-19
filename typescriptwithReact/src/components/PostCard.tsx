import { PostProps } from "../types/types";

const PostCard = ({id, title, body}: PostProps) => {   //  props: PostProps
  return (
    <div>
      <h2>{id}</h2>
      <span>
        <h2>{title}</h2>
      </span>
      <h2>{body}</h2>
    </div>
  );
};

export default PostCard;
