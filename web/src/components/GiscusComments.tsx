"use client";
import Giscus from "@giscus/react";

export default function GiscusComments() {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID!;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY!;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!;

  return (
    <div className="mt-10">
      <Giscus
        id="comments"
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="transparent_dark"
        lang="es"
        loading="lazy"
      />
    </div>
  );
}
