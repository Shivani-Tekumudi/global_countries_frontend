import { useEffect, useState } from "react"

export const Card = ({name,flag,abbr}) =>{
    return(
        <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center',
            border: "1px solid black",
            borderRadius: '5px', 
            textAlign:'center',height: '150px', width: '150px'
            }}>
            <img src ={flag} alt="flage img" style={{textAlign:'center',height: '70px', width: '70px'}}/>
            <h5> {name} </h5>
        </div>
    )
}
 



export default function Countries(){
const [countries,setCountries] =useState([]);
 
    const APIEndPoint =" https://xcountries-backend.azurewebsites.net/all";

useEffect(() => {
    fetch(APIEndPoint)
    .then((res) => res.json())
    .then((data) => setCountries(data)).catch((err) => console.error(err))
}, [])

return (
    <div  style={{
            display: 'flex',
            flexDirection: 'row',
            gap:'15px',
            justifyContent:'center',
            flexWrap:'wrap',
            alignItems: 'center' 
            
           
            }}>
               
    {countries.map((ele) => 
    
    <Card name={ele.name} flag={ele.flag} abbr={ele.abbr} key={ele.abbr}/>
   
    )}
   
    </div>
)
}