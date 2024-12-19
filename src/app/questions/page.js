import { Suspense } from "react";
import QuizContent from "../components/quizContent";
import Wrapper from "../wrapper";

export default function Quiz(){
    return(
        <Wrapper>
            <Suspense fallback={<h3>Loading quiz...</h3>}>
                <QuizContent/>
            </Suspense>
        </Wrapper>
    )
}