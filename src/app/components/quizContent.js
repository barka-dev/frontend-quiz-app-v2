'use client'

import AnswersSection from "./answersSection";
import QuestionSection from "./questionSection";
import { useEffect, useState } from 'react';
import { useData } from '../DataContext';
import { useSearchParams } from 'next/navigation'
import ScoreDisplay from "./scoreDisplay";
import Title from "./title";


export default function QuizContent(){
    const {data, setTopicLogo, setTopicTitle, setTopicBgClass, counter} = useData();
    const searchParams = useSearchParams();
    const[result, setResult] = useState(null);

    useEffect(()=>{
        const bg_classes = {"HTML":"bg_html", "CSS":"bg_css", "JavaScript":"bg_js", "Accessibility":"bg_access"};
        if(data && searchParams.get('subject')){
            const filtered = data.filter((item)=>item.title === searchParams.get('subject')); 
            setResult(filtered[0] || null);
            setTopicLogo(filtered[0].icon);
            setTopicTitle(filtered[0].title);
            setTopicBgClass(bg_classes[filtered[0].title]);  
        }
    },[searchParams, result, data, setTopicLogo, setTopicTitle, setTopicBgClass])
    if(result && counter > result.questions.length){
        return(
            <>
            <section>
                <Title title_part1="Quiz completed" title_part2="You scored..."/>
            </section>
            <article>
                <ScoreDisplay />
            </article> 
            </>
        )
    }
    return(
        <>
            <section>
                <QuestionSection data={result}/>
            </section>
            <article>
                <AnswersSection data={result}/>
            </article>
        </>
    )
}