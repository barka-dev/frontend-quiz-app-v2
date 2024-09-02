import Image from 'next/image';
import ThemeSwitcher from "./themeSwitcher";

export default function Header(){
    return (
        <header>
          <Image src="/images/icon-accessibility.svg" alt="topic icon" width={40} height={40}/>
          <h1>Accessibility</h1>
          <ThemeSwitcher/>
        </header>
    )
}