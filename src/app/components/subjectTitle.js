'use client'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useData } from '../DataContext';

export default function SubjectTitle(){
    const {topicLogo, topicTitle, topicBgClass} = useData();
    const searchParams = useSearchParams();

    useEffect(()=>{
        if(searchParams.get('subject')){
            document.querySelectorAll(".subject_title_container").forEach((item)=>{
                item.classList.add("visible");
            })
            
        }else{
            document.querySelectorAll(".subject_title_container").forEach((item)=>{
                item.classList.remove("visible");
            })
        }
    },[searchParams])

    return (
        <div className='subject_title_container'>
            <Image src={topicLogo ? topicLogo : '/images/icon-html.svg'} className= {`header_subject_icon ${ topicBgClass ? topicBgClass : ''}`} alt="topic icon" width={40} height={40}/>
            <h1 className='header_subject_title'>{topicTitle ? topicTitle : 'Subject'}</h1>
        </div>
    )
}