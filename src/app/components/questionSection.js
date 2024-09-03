export default function QuestionSection(){
    return(
        <>
            <p>Question 6 of 10</p>
            <h3>Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h3>
            <input type="range" min={1} max={10} value={6} readOnly/>
        </>
    )
}