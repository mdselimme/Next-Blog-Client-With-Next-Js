/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();
  return blogs.slice(0, 2).map((blog: any) => ({
    blogId: String(blog.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blog = await res.json();

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blog = await res.json();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-28">Blog Details</h1>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetails;
