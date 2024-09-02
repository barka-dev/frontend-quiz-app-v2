'use client'

import Image from "next/image";

export default function AnswersSection(){
    const handleStyle = (e)=>{
        const answers = document.querySelectorAll(".answers");
        answers.forEach((element)=>element.classList.remove("active"));
        e.currentTarget.classList.add("active");
    }
    return(
        <>
            <label for="answer_A" className="answers" onClick={handleStyle}>
                <input type="radio" className="radios" id="answer_A" name="answer" value="A"/> 
                <span>A</span>
                4.5:1
                <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
            </label>
            <label for="answer_B" className="answers" onClick={handleStyle}>
                <input type="radio" className="radios" id="answer_B" name="answer" value="B"/> 
                <span>B</span>
                3:1
                <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
            </label>
            <label for="answer_c" className="answers" onClick={handleStyle}>
                <input type="radio" className="radios" id="answer_c" name="answer" value="C"/> 
                <span>C</span>
                2.5:1
                <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
            </label>
            <label for="answer_d" className="answers" onClick={handleStyle}>
                <input type="radio" className="radios" id="answer_d" name="answer" value="D"/> 
                <span>D</span>
                5:1
                <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
            </label>
            <button className="submit_answer">Submit Answer</button>
        </>
    )
}