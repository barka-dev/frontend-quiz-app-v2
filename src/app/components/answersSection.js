'use client'

import Image from "next/image";

export default function AnswersSection({data, data_result}){
    const letters = ["A","B","C","D"];
    
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
        document.querySelector(".error_message").style.display = 'none';
        optionStyle(["active"], ["active_letter"], "active", "active_letter");
    }

    const onSubmitOption = ()=>{
        
        data_result.setCounter(data_result.counter+1);
       
        // const label_classes = ["active", "correct_answer_label","incorrect_answer_label"];
        // const span_classes = ["active_letter","correct_answer_span", "incorrect_answer_span"];
        // const correct_icons = document.querySelectorAll(".correct_Incorrect_Icon");
        // const checked_option = document.querySelector("input[type='radio']:checked");
        // const status = false;
        // if(checked_option){
        //     if(status){
        //         optionStyle(label_classes, span_classes, "correct_answer_label", "correct_answer_span");
        //         correct_icons.forEach((icon)=>icon.src = "/images/icon-correct.svg");
        //     }else{
        //         optionStyle(label_classes, span_classes, "incorrect_answer_label", "incorrect_answer_span");
        //         correct_icons.forEach((icon)=>icon.src = "/images/icon-incorrect.svg");
        //     }
        //     correct_icons.forEach((icon)=>icon.style.visibility = "hidden");
        //     document.querySelector("input[type='radio']:checked ~ .correct_Incorrect_Icon").style.visibility = "visible";
        // }else{
        //     document.querySelector(".error_message").style.display = 'flex';
        // }
    }
    if(data && data_result){
        return(
            <>
                {data.questions[data_result.counter-1].options.map((value, index)=>(
                    <label htmlFor={`answer_${letters[index]}`} className="answers"  key={index}>
                        <input type="radio" className="radios" id={`answer_${letters[index]}`} name="answer" value={letters[index]} onChange={handleStyleOnCheck}/> 
                        <span className="option_letter">{letters[index]}</span>
                        {value}
                        <Image src="/images/icon-correct.svg" alt="correct icon" className="correct_Incorrect_Icon" width={40} height={40}/>
                    </label>
                ))}
                <button className="submit_answer" onClick={onSubmitOption}>Submit Answer</button>
                <div className="error_message">
                    <Image src="/images/icon-incorrect.svg" alt="correct icon" className="error_icon" width={40} height={40}/>
                    <span className="error_text">Please select an answer</span>
                </div>
            </>
        )
    }else{
        return(
            <h3>Loading options ...</h3>
        )
    }

}