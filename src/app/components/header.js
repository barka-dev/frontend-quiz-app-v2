import Image from 'next/image';
import ThemeSwitcher from "./themeSwitcher";

export default function Header(){
    return (
        <header>
          <Image src="/images/icon-accessibility.svg" className='header_subject_icon' alt="topic icon" width={40} height={40}/>
          <h1 className='header_subject_title'>Accessibility</h1>
          <ThemeSwitcher/>
        </header>
    )
}