import React from 'react'

const ShowData = ({data,opClick}:{data:string[],opClick:(e:any,index:number)=>void}) => {
    return (
        <ul>
            {data.map((item:string,index:number) => <li key={index} >{item}</li>)}
        </ul>
    )
}

export default ShowData