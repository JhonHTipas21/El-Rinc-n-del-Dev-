import Link from "next/link";
import type { Post } from "@/content/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="card overflow-hidden flex flex-col">
      <div className="p-6 flex-1">
        <span className="text-xs text-brand font-semibold">{post.tag}</span>
        <h3 className="mt-2 text-xl font-semibold leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">{post.excerpt}</p>
      </div>
      <div className="px-6 py-4 border-t border-gray-100 dark:border-surface-300 text-sm text-gray-500 dark:text-gray-400">
        {new Date(post.date).toLocaleDateString()} · {post.readingTime} min
      </div>
    </article>
  );
}
