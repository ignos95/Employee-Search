import React from 'react'

const row=(props)=>{

     const rw=Object.keys(props.obj)
                      .map( 
                           (i,ind)=>( <td key={ind}>{props.obj[i]}</td> )
                          )
    
     return(
            <tr>{rw}</tr>
           )
}

export default row