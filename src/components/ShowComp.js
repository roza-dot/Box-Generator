import React from 'react';


const ShowComp = ({boxList}) =>{
    return(
       <div>
        {boxList.map((color, i)=>(
            <div style= {{backgroundColor:color, width:"80px", height: "80px"}} key={i}>{color}</div>
        ))} 
       </div>
    )
}

export default ShowComp;  