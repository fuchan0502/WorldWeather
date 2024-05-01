//App.tsx
import React from 'react'

import { useState } from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"

type ResultsStates = {
  country: string
  cityName: string
  temparature: string
  condditionText: string 
  icon: string
}

const App = () => {
  const [city, setCity] = useState<string>("")

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(`http://api.weatherapi.com/v1/current.json?key=6df9cac874e94f7ca8e162809243004&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(date =>{
          setResult({
              country: date.location.country,
              cityName: date.location.name,
              temparature: date.current.temp_c,
              condditionText: date.current.condition.text,
              icon: date.current.condition.icon
          })
        })
    }

  const [result, setResult] = useState<ResultsStates>({
      country: "",
      cityName: "",
      temparature: "",
      condditionText: "",
      icon: ""
  })
  return (
    <div className='wrapper'>
        <div className='container'>
            <Title/>
            <Form setCity={setCity} getWeather={getWeather}/>
            <Result results={result}/>
        </div>
    </div>
  )
}

export default App