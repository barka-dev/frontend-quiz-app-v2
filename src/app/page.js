import Image from "next/image";
import styles from "./page.module.css";
import SubjectsLinks from "./subjectsLinks";

export default function Home() {
  return (
    <main>
      <section>
        <h2>Welcome to the</h2>
        <strong>Frontend Quiz!</strong>
        <p>Pick a subject to get started.</p>
      </section>
      <article>
        <SubjectsLinks/>
      </article>
    </main>
  );
}
