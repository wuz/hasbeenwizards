import { allPosts } from "@/.contentlayer/generated";
import Body from "@/components/Body";
import MainLayout from "@/components/MainLayout";
import Title from "@/components/Title";
import Link from "next/link";

export default function Blog() {
  return (
    <MainLayout>
      <Title type="page">Blog</Title>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <Title>{post.title}</Title>
          </Link>
          {post.description && <Body>{post.description}</Body>}
        </article>
      ))}
      {allPosts.length === 0 && <Body>No posts yet.</Body>}
    </MainLayout>
  );
}
