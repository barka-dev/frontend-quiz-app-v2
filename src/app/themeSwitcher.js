'use client'

import Image from 'next/image';

export default function ThemeSwitcher(){
    const switchDarkLight = ()=>{
        const themeIcon = document.querySelector("#theme");
        themeIcon.classList.toggle("moveRight");
    }

    return(
        <>
            <Image src="/images/icon-sun-dark.svg" className="sunmoonIcons" alt="sun icon" width={24} height={24}/>
            <input type="checkbox" name="theme" className="themeIcon" id="theme" onClick={switchDarkLight}/>
            <Image src="/images/icon-moon-dark.svg" className="sunmoonIcons" alt="moon icon" width={24} height={24}/>
        </>
    )
}