import Link from "next/link";
import { MainLayout } from "../components/mainLayout";

export default function About() {
  return (
    <MainLayout>
      <h1>hello from About page</h1>
      <p>
        <Link title="to main" href="/">
          to main
        </Link>
      </p>
      <p>
        <Link title="to post" href="/post/22">
          to post
        </Link>
      </p>
    </MainLayout>
  );
}
