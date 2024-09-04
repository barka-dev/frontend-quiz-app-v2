'use client'
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataContext';
import ThemeSwitcher from "./themeSwitcher";
import {useSearchParams } from 'next/navigation'

export default function Header(){
  const bg_classes = {"HTML":"bg_html", "CSS":"bg_css", "JavaScript":"bg_js", "Accessibility":"bg_access"}
  const data = useContext(DataContext);
  const searchParams = useSearchParams();
  const[result, setResult] = useState(null);

  useEffect(()=>{
    if(data && searchParams.get('subject')){
      document.querySelector(".header_subject_icon").classList.add("visible");
      document.querySelector(".header_subject_title").classList.add("visible");
      const filtered = data.filter((item)=>item.title === searchParams.get('subject')); 
      setResult(filtered[0] || null);
      console.log("data=>", result, searchParams.get('subject'));
    }else{
      document.querySelector(".header_subject_icon").classList.remove("visible");
      document.querySelector(".header_subject_title").classList.remove("visible");
    }
  },[data, searchParams, result])

  return (
      <header>
        <Image src={result ? result.icon : "/images/icon-html.svg"} className= {`header_subject_icon ${ result ? bg_classes[result.title] : ''}`} alt="topic icon" width={40} height={40}/>
        <h1 className='header_subject_title'>{result ? result.title : "HTML"}</h1>
        <ThemeSwitcher/>
      </header>
  )
}