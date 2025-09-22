import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import React from "react";

const blogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blog = await res.json();
  return (
    <div>
      <h1>Blog Details</h1>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default blogDetails;
