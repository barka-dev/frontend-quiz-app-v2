import AnswersSection from "../components/answersSection";
import QuestionSection from "../components/questionSection";

export default function page(){
    return(
        <>
            <section>
                <QuestionSection/>
            </section>
            <article>
                <AnswersSection/>
            </article>
        </>
    )
}