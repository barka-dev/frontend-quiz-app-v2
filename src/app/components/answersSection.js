'use client'

import Image from "next/image";

export default function AnswersSection(){
    const optionStyle = (answer_classes, opt_letter_classes, opt_parent_class, opt_sibling_class)=>{
        const answers = document.querySelectorAll(".answers");
        const option_letters = document.querySelectorAll(".option_letter");
        const checked_option = document.querySelector("input[type='radio']:checked");

        answers.forEach((element)=>element.classList.remove(...answer_classes));
        option_letters.forEach((element)=>element.classList.remove(...opt_letter_classes));

        checked_option.parentElement.classList.add(opt_parent_class);
        checked_option.nextElementSibling.classList.add(opt_sibling_class);  
    }

    const handleStyleOnCheck = ()=>{
        optionStyle(["active"], ["active_letter"], "active", "active_letter");
    }

    const onSubmitOption = ()=>{
        const label_classes = ["active", "correct_answer_label","incorrect_answer_label"];
        const span_classes = ["active_letter","correct_answer_span", "incorrect_answer_span"];
        const correct_icons = document.querySelectorAll(".correct_Incorrect_Icon");

        const status = false;

        if(status){
            optionStyle(label_classes, span_classes, "correct_answer_label", "correct_answer_span");
            correct_icons.forEach((icon)=>icon.src = "/images/icon-correct.svg");
        }else{
            optionStyle(label_classes, span_classes, "incorrect_answer_label", "incorrect_answer_span");
            correct_icons.forEach((icon)=>icon.src = "/images/icon-incorrect.svg");
        }
        
        
        correct_icons.forEach((icon)=>icon.style.display = "none");
        document.querySelector("input[type='radio']:checked ~ .correct_Incorrect_Icon").style.display = "inline";
    }
    return(
        <>
            <label htmlFor="answer_A" className="answers" >
                <input type="radio" className="radios" id="answer_A" name="answer" value="A" onChange={handleStyleOnCheck}/> 
                <span className="option_letter">A</span>
                4.5:1
                <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
            </label>
            <label htmlFor="answer_B" className="answers" >
                <input type="radio" className="radios" id="answer_B" name="answer" value="B" onChange={handleStyleOnCheck}/> 
                <span className="option_letter">B</span>
                3:1
                <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
            </label>
            <label htmlFor="answer_c" className="answers" >
                <input type="radio" className="radios" id="answer_c" name="answer" value="C" onChange={handleStyleOnCheck}/> 
                <span className="option_letter">C</span>
                2.5:1
                <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
            </label>
            <label htmlFor="answer_d" className="answers" >
                <input type="radio" className="radios" id="answer_d" name="answer" value="D" onChange={handleStyleOnCheck}/> 
                <span className="option_letter">D</span>
                5:1
                <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
            </label>
            <button className="submit_answer" onClick={onSubmitOption}>Submit Answer</button>
        </>
    )
}