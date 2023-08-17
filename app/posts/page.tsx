import { allPosts } from "@/.contentlayer/generated";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";

export default function Blog() {
  return (
    <MainLayout>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </MainLayout>
  );
}
