'use client'

import { useData } from '../DataContext';
import ThemeSwitcher from "./themeSwitcher";
import SubjectTitle from './subjectTitle';

export default function Header(){
  const data_result = useData();
  
if(data_result){
  return (
      <header>
        <SubjectTitle icon_url={data_result.topicLogo} title={data_result.topicTitle} bg_class={data_result.topicBgClass}/>
        <ThemeSwitcher/>
      </header>
  )
}else{
  return(
    <h3>Loading ...</h3>
  )
}
}