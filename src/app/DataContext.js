'use client'
import { createContext, useState, useEffect} from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch('/data/data.json')
        .then((response) => response.json())
        .then((jsonData) =>{
            setData(jsonData.quizzes);
        })
        .catch((error) => console.error('Error fetching the data: ', error));
    },[]);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}