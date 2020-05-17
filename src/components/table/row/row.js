import React from 'react'

const row=(props)=>{

     const rw=Object.keys(props.obj)
                      .map( 
                           (i,ind)=>{
                                     if(props.obj[i])
                                      return ( <td key={ind}>{props.obj[i]}</td> )
                                     else
                                      return ( <td key={ind}>--Nill--</td> )
                                   }
                          )
    
     return(
            <tr>{rw}</tr>
           )
}

export default row