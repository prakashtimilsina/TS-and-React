import PostCard from "./PostCard"
import { useState, useEffect } from "react";

interface Post{
    id:number;
    title:string;
    body:string
}

function PostList(): JSX.Element {
    const[post,setPost]=useState<Post[] | null>(null);
    
    useEffect(() => {
        getData();
      }, []);
    
    async function getData(): Promise<void> {
        try{
            const result = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (result.ok){
                const data: Post[] = await result.json();
                setPost(data);
            } else {
                throw new Error("Failed to fetch post")
            }
        } catch (error){
            console.error('Error fetching data: ', error)
        }
        
      }
  
  if (post === null) {
    return <div>Loading....</div>
  }

  return (
    <div>
        {/* <PostCard title={"Title"} body={"Body"} id={10} />   */}
        {post.map(p=>(
          <PostCard key={p.id} {...p} />
        ))}      
    </div>
  )
}

export default PostList;