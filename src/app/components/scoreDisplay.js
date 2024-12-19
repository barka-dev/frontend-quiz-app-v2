'use client'
import { Suspense } from "react";
import SubjectTitle from "./subjectTitle";
import { useRouter } from 'next/navigation'
import { useData } from "../DataContext";

export default function ScoreDisplay(){
    const {topicLogo, topicTitle, topicBgClass, score} = useData();
    const router = useRouter()
    const playAgain = () =>{
        router.push('/');
    }

    return(
        <>
            <div className="score_container">
                <Suspense fallback={<h3>Loading ...</h3>}>
                    <SubjectTitle icon_url={topicLogo} title={topicTitle} bg_class={topicBgClass}/>  
                </Suspense>
                <h4 className="score">{score ? score : 0}</h4>
                <span className="score_msg">out of 10</span>
            </div>
            <button className="play_again_btn" onClick={playAgain}>Play Again</button>
        </>
    )
}