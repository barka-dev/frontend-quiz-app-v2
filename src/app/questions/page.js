'use client'

import AnswersSection from "../components/answersSection";
import QuestionSection from "../components/questionSection";
import { useEffect, useState } from 'react';
import { useData } from '../DataContext';
import { useSearchParams } from 'next/navigation'
import ScoreDisplay from "@/app/components/scoreDisplay";
import Title from "@/app/components/title";


export default function Quiz(){
    const data_result = useData();
    const searchParams = useSearchParams();
    const[result, setResult] = useState(null);

    useEffect(()=>{
        const bg_classes = {"HTML":"bg_html", "CSS":"bg_css", "JavaScript":"bg_js", "Accessibility":"bg_access"};
        if(data_result.data && searchParams.get('subject')){
            const filtered = data_result.data.filter((item)=>item.title === searchParams.get('subject')); 
            setResult(filtered[0] || null);
            data_result.setTopicLogo(filtered[0].icon);
            data_result.setTopicTitle(filtered[0].title);
            data_result.setTopicBgClass(bg_classes[filtered[0].title]);  
        }
    },[data_result, searchParams, result])
    if(data_result.counter>10){
        return(
            <>
            {console.log("counter=>",data_result.counter)}
            <section>
                <Title title_part1="Quiz completed" title_part2="You scored..."/>
            </section>
            <article>
                <ScoreDisplay data_result={data_result}/>
            </article> 
            </>
        )
    }
    return(
        <>
        {console.log("counter=>",data_result.counter)}
            <section>
                <QuestionSection data={result} data_result={data_result}/>
            </section>
            <article>
                <AnswersSection data={result} data_result={data_result}/>
            </article>
        </>
    )
}