import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import GiscusComments from "@/components/GiscusComments";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function PostPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6">
        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">{post.tag}</span>
        <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {new Date(post.date).toLocaleDateString()} · {post.readingTime} min
        </p>
      </div>
      <div
        className="prose lg:prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: toHtml(post.content) }}
      />
      <GiscusComments />
    </article>
  );
}

function toHtml(md: string) {
  return md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/`(.*?)`/gim, "<code>$1</code>")
    .replace(/\n$/gim, "<br />")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^/, "<p>")
    .concat("</p>");
}
