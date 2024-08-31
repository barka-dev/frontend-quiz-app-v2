import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section>
        <h2>Welcome to the</h2>
        <strong>Frontend Quiz!</strong>
        <p>Pick a subject to get started.</p>
      </section>
      <article>
        <a href="/html_section" className="subjects">
          <Image src="/images/icon-html.svg" alt="html icon"  width={40} height={40}/> HTML
        </a>
        <a href="/CSS_section" className="subjects">
          <Image src="/images/icon-css.svg" alt="css icon"  width={40} height={40} /> CSS
        </a>
        <a href="/html_section" className="subjects">
          <Image src="/images/icon-js.svg" alt="js icon"  width={40} height={40} /> Javascript
        </a>
        <a href="/html_section" className="subjects">
          <Image
            src="/images/icon-accessibility.svg"
            alt="accessibility icon"
            width={40} height={40}/>
          Accessibility
        </a>
      </article>
    </main>
  );
}
