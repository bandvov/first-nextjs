import Link from "next/link";
import Head from "next/head";
import { Header } from "./header/header";
export function MainLayout({ children }) {
  return (
    <>
      <style jsx>{`
        h1 {
          font-family: "Roboto", sans-serif;
        }
        nav {
          display: flex;

          background-color: darkblue;
          align-items: center;
        }
        nav a {
          color: white;
          text-decoration: none;
          padding: 1rem;
        }
        nav a:hover {
          background-color: green;
          transition: 0.3s;
        }
      `}</style>
      <Head>
        <title>test nextjs</title>
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/post">
          <a>Posts</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <Header />
      <main>{children}</main>
    </>
  );
}
