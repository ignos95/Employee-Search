import React from 'react'
import Classes from './table.module.css'

import Row from './row/row'
import TableHeading from './heading/heading'

const Table=(props)=>{

    let table=null
    let tHeading=null
    let rows= null
    let tableData=props.tData

    if(tableData.length>20)
    tableData=tableData.filter( (_,ind)=>{
                                            if( ind >= (props.pageNo*20-20)  &&  ind < (props.pageNo*20) ) return true
                                            else return false
                                           }
                              )
                                      
    if(tableData.length)
    {
     tHeading=<TableHeading obj={props.tData[0]} sortTable={props.sortTable}/>

     rows=tableData.map(
                          (itm,ind)=>(<Row obj={itm} key={ind}/>)
                       )

     table=<table>
             <thead>      
              {tHeading}
             </thead>  
             <tbody>
              {rows}
             </tbody>
           </table>
    }
    
    return (
      <div className={props.darkMode?[Classes.employee_table,Classes.D_employee_table].join(' '):Classes.employee_table}>
        {table}
      </div>
    )
    
}

export default Table