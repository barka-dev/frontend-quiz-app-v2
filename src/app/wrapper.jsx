'use client'
import React, { useEffect, useState } from 'react'
import { DataProvider } from './DataContext'

const Wrapper = ({children}) => {
    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(1);
    const [score, setScore] = useState(0);
    const [topicLogo, setTopicLogo] = useState('');
    const [topicTitle, setTopicTitle] = useState('');
    const [topicBgClass, setTopicBgClass] = useState('');

    const fetchData = async () => {
        try{
            const response = await fetch('/data/data.json');
            if(!response.ok){
                throw new Error('Failed to fetch the data');
            }
            const jsonData = await response.json();
            return jsonData.quizzes;
        }catch(error){
            console.error('Error fetching the data: ', error);
        }
    }

    useEffect(()=>{
        fetchData().then(data => setData(data));
    },[])
    
  return (
    <DataProvider value={{data, setData, counter, setCounter, score, setScore, topicLogo, setTopicLogo, topicTitle, setTopicTitle, topicBgClass, setTopicBgClass, fetchData}}>
        {children}
    </DataProvider>
    
  )
}

export default Wrapper