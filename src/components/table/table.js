import React from 'react'
import Row from './row/row'

const Table=(props)=>{
  
    let rows=<tr>
              <td>--Nil--</td>
              <td>--Nil--</td>
              <td>--Nil--</td>
             </tr>

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

    return (
           <table>
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
    )
    
}

export default Table