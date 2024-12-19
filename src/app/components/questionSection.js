'use client'

import { useEffect} from 'react';
import { useData } from '../DataContext';

export default function QuestionSection({data}){
    const {counter} = useData();
    useEffect(()=>{
        if(data &&  counter){
            document.documentElement.style.setProperty('--range_status', `${ counter ?  counter*10 : 0}%`);
        }
    },[data, counter])

    if(data &&  counter){
        return(
            <>
                <p>Question { counter} of {data.questions.length}</p>
                <h3>{data.questions[ counter-1].question}</h3>
                <label htmlFor='progress' className='progress_label'>progress</label>
                <input id='progress' tabIndex="-1" type="range" className='range_status' min={1} max={10} value={ counter} readOnly/>
            </>
        )
    }else{
        return(
            <h3>Loading question ...</h3>
        )
    }
}