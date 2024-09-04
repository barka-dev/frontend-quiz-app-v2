'use client'

import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataContext';
import {useSearchParams } from 'next/navigation'

export default function QuestionSection(){
    const data = useContext(DataContext);
    const searchParams = useSearchParams();
    const[result, setResult] = useState(null);

    useEffect(()=>{
        if(data.data && searchParams.get('subject')){
            const filtered = data.data.filter((item)=>item.title === searchParams.get('subject')); 
            setResult(filtered[0] || null);
            document.documentElement.style.setProperty('--range_status', `${data ? data.counter*10 : 0}%`);

        }
    },[data, searchParams, result])

    if(data && result){
        return(
            <>
                <p>Question {data.counter} of {result.questions.length}</p>
                <h3>{result.questions[data.counter-1].question}</h3>
                <input type="range" className='range_status' min={1} max={10} value={data.counter} readOnly/>
            </>
        )
    }else{
        return(
            <h3>Loading question ...</h3>
        )
    }
}