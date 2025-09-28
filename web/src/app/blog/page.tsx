import PostCard from "@/components/PostCard";
import { posts } from "@/content/posts";

export const metadata = {
  title: "Blog",
  description: "Artículos técnicos y notas de desarrollo",
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
