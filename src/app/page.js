import Image from "next/image";
import styles from "./page.module.css";
import SubjectsLinks from "./components/subjectsLinks";
import Title from "./components/title";

export default function Home() {
  return (
    <>
      <section>
        <Title/>
        <p className="italic_text_home">Pick a subject to get started.</p>
      </section>
      <article>
        <SubjectsLinks/>
      </article>
    </>
  );
}
