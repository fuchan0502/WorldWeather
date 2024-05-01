// Result.tsx
import React from 'react'

type ResultProps = {
    results: {
        country: string
        cityName: string
        temparature: string
        condditionText: string 
        icon: string
    }
}

const Result = (props: ResultProps) => {
    return(
        <div>
            {props.results.country &&
                <div>
                    <div className='results-country'>{props.results.country}</div>
                    <div className='results-city'>{props.results.cityName}</div>
                    <div className='results-temp'>{props.results.temparature}<span>℃</span></div>
                    <div className='results-condition'>
                        <img src={props.results.icon} alt='icon'/>
                        <span>{props.results.condditionText}</span>
                    </div>
                </div>}
        </div>
    )
}

export default Result