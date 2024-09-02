'use client'
import Image from "next/image";

export default function SubjectsLinks(){
    const addVisibility = ()=>{
        const header_subject_icon = document.querySelector(".header_subject_icon");
        const header_subject_title = document.querySelector(".header_subject_title");
        header_subject_icon.style.visibility = 'visible';
        header_subject_title.style.visibility = 'visible';

    }
    const handleClick = (e)=>{
        const topics = ['HTML','CSS', 'Javascript', 'Accessibility'];
        const result = topics.find(topic=>e.target.textContent.trim() == topic);
        console.log(result);
    }
    return(
        <>
            <a href="/questions" className="subjects" onClick={handleClick}>
                <Image src="/images/icon-html.svg" alt="html icon"  width={40} height={40}/> HTML
            </a>
            <a href="#" className="subjects" onClick={handleClick}>
                <Image src="/images/icon-css.svg" alt="css icon"  width={40} height={40} /> CSS
            </a>
            <a href="#" className="subjects" onClick={handleClick}>
                <Image src="/images/icon-js.svg" alt="js icon"  width={40} height={40} /> Javascript
            </a>
            <a href="#" className="subjects" onClick={handleClick}>
                <Image src="/images/icon-accessibility.svg" alt="accessibility icon" width={40} height={40}/> Accessibility
            </a>
        </>
    )
}