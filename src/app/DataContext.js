'use client'
import { createContext, useContext, useState, useEffect} from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(1);
    const [score, setScore] = useState(0);
    const [topicLogo, setTopicLogo] = useState('');
    const [topicTitle, setTopicTitle] = useState('');
    const [topicBgClass, setTopicBgClass] = useState('');


    useEffect(()=>{
        fetch('/data/data.json')
        .then((response) => response.json())
        .then((jsonData) =>{
            setData(jsonData.quizzes);
        })
        .catch((error) => console.error('Error fetching the data: ', error));
    },[]);

    return (
        <DataContext.Provider value={{
            data, 
            counter, setCounter, 
            score, setScore, 
            topicLogo, setTopicLogo, 
            topicTitle, setTopicTitle, 
            topicBgClass, setTopicBgClass
        }}>
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    return useContext(DataContext)
}