import getPost from "../../lib/alluserPost";
import React from "react";
export async function generateMetadata({ params }) {
  const id = params?.id;
  const post = await getPost(id);
  console.log(post);
  return {
    title: "ReadNest || " + post?.title,
  };
}

const UserPost = async ({ params }) => {
  const id = params?.id;
  const post = await getPost(id);
  console.log(post);

  return (
    <div className="mt-10">
      <h2 className="mb-2 text-[18px]"> ={post.title}</h2>
      <p className="w-full max-w-[900px]">{post.body}</p>
    </div>
  );
};

export default UserPost;
