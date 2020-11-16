import Link from "next/link";
import { MainLayout } from "../components/mainLayout";
export default function Index() {
  return (
    <MainLayout>
      <h1>hello from NEXTJS</h1>
      <p>
        <Link title="to about" href="/about">
          <a>to about</a>
        </Link>
      </p>
      <p>
        <Link title="to about" href="/post">
          <a>to posts</a>
        </Link>
      </p>
    </MainLayout>
  );
}
