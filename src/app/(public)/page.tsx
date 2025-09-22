import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types/post";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      revalidate: 30,
    },
  });
  console.log(process.env.NEXT_PUBLIC_BASE_API);
  const { data: posts } = await res.json();

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto py-8">
        {posts.slice(0, 3).map((post: IPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
