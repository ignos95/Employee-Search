import React from "react"
const tableHeading=(props)=>
{  
    const heading=Object.keys(props.obj).map(
                                             itm=>{
                                                   const hd=itm
                                                   if(itm==="pos") itm="designation"
                                                   return(<th key={itm} onClick={()=>{props.sortTable(hd)}}>{itm.toUpperCase()}</th>)
                                                  }
                                            )
    return(
         <tr>
          {heading}
         </tr>
        )  
}

export default tableHeading