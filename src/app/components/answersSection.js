import Image from "next/image";

export default function AnswersSection(){
    return(
        <>
            <label for="answer_A" className="answers">
                <input type="radio" id="answer_A" name="answer" value="A"/> 
                <span>A</span>
                4.5:1
            </label>
            <label for="answer_B" className="answers">
                <input type="radio" id="answer_B" name="answer" value="B"/> 
                <span>B</span>
                3:1
            </label>
            <label for="answer_c" className="answers">
                <input type="radio" id="answer_c" name="answer" value="C"/> 
                <span>C</span>
                2.5:1
            </label>
            <label for="answer_d" className="answers">
                <input type="radio" id="answer_d" name="answer" value="D"/> 
                <span>D</span>
                5:1
            </label>
            <button className="submit_answer">Submit Answer</button>
        </>
    )
}