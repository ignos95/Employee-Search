import React from 'react'
import Row from './row/row'

const Table=(props)=>{
    console.log(props.tData, 'tdata table.js' )
    let rows=null
    if(props.tData)
    {
    rows=props.tData.map( (itm,ind)=>{ return(
                                        <Row name={itm.name} 
                                            age={itm.age}
                                            pos={itm.pos}
                                            
                                            key={ind}/>
                                        )
                                }
                        ) 
    }
   
    let table=null
    if(rows)
    {
     table=<table>
            <thead>      
             <tr>
               <th>Employee Name</th>
               <th>Age</th>
               <th>Position</th>
             </tr>
            </thead>  
            <tbody>
             {rows}
            </tbody>
           </table>
    }
    rows=null
    return (
      <div>
        {table}
      </div>
    )
    
}

export default Table