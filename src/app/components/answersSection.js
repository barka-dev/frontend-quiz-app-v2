import Image from "next/image";

export default function AnswersSection(){
    return(
        <>
            <a href="/questions" className="subjects" >
                <Image src="/images/icon-html.svg" alt="html icon"  width={40} height={40}/> HTML
            </a>
            <a href="#" className="subjects">
                <Image src="/images/icon-css.svg" alt="css icon"  width={40} height={40} /> CSS
            </a>
            <a href="#" className="subjects">
                <Image src="/images/icon-js.svg" alt="js icon"  width={40} height={40} /> Javascript
            </a>
            <a href="#" className="subjects">
                <Image src="/images/icon-accessibility.svg" alt="accessibility icon" width={40} height={40}/> Accessibility
            </a>
        </>
    )
}