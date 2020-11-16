import Link from "next/link";
import { MainLayout } from "../../components/mainLayout";

export default function Post({ post }) {
  return (
    post && (
      <MainLayout>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <hr />
        <Link title="to main" href="/post">
          Back to posts
        </Link>
      </MainLayout>
    )
  );
}

export async function getStaticProps(context) {
  const receivedPost = await fetch(
    `http://localhost:4200/posts/${context.params.id}`
  );
  const post = await receivedPost.json();
  return {
    props: {
      post,
    },
  };
}
export function getStaticPaths() {
  return {
    paths: new Array(3).fill(null).map((item, index) => {
      return {
        params: {
          id: ++index + "",
        },
      };
    }),
    fallback: false,
  };
}
