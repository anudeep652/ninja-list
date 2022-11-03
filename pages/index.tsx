import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nostrum quas sunt ab sapiente doloremque quo nulla distinctio
          accusamus nisi? Dolor nostrum maxime illum eius, id nobis. Vero,
          magnam dolore! Quas dolor sint saepe temporibus voluptatibus vel
          aliquam optio facilis iusto facere qui quos placeat odio, voluptatum
          rem, consequatur cupiditate!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          expedita quam nulla culpa dicta et dolorum accusamus dolorem delectus
          ad fugiat sit, nihil provident inventore aperiam debitis dolor ex est,
          eum molestiae labore porro ab aliquid. Quam voluptas mollitia
          explicabo porro officia! Voluptas aspernatur accusamus rem error
          suscipit modi. Dolorum.
        </p>
        <Link href={"/ninjas"} className={styles.btn}>
          See Ninja listing
        </Link>
      </div>
    </>
  );
}
