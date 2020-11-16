import Link from "next/link";
import { CarItem } from "../../components/car-item/car-item";
import { MainLayout } from "../../components/mainLayout";
import styles from "../../styles/posts.module.css";
export default function Posts({ posts, cars }) {
  const links = posts.map(({ id, title }) => {
    return (
      <li key={id}>
        <Link href={"/post/[id]"} as={`/post/${id}`}>
          <a>{title}</a>
        </Link>
      </li>
    );
  });
  const carsMapped = cars.map(({ photo, brand, model, year, price }) => {
    return (
      <div key={model}>
        <CarItem
          brand={brand}
          model={model}
          year={year}
          price={price}
          photo={photo}
        ></CarItem>
      </div>
    );
  });

  return (
    <MainLayout>
      <ul>{links}</ul>
      <div className={styles.cars}>{carsMapped}</div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const receivedPosts = await fetch("http://localhost:4200/posts");
  const posts = await receivedPosts.json();
  const receivedCars = await fetch("http://localhost:4200/cars");
  const cars = await receivedCars.json();
  return {
    props: {
      posts,
      cars,
    },
  };
}
