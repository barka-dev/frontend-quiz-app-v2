'use client'
import SubjectTitle from "./subjectTitle";

export default function ScoreDisplay({data_result}){

    return(
        <>
            <div className="score_container">
                <SubjectTitle icon_url={data_result.topicLogo} title={data_result.topicTitle} bg_class={data_result.topicBgClass}/>  
                <h4 className="score">{data_result.score ? data_result.score : 0}</h4>
                <span className="score_msg">out of 10</span>
            </div>
            <button className="submit_answer">Play Again</button>
        </>
    )
}