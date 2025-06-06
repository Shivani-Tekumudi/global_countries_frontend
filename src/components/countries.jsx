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
 
    const APIEndPoint =" https://xcol";

useEffect(() => {
    fetch(APIEndPoint)
    .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
    .then((data) => setCountries(data))
    .catch((err) => console.error("Error fetching data:",err))
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