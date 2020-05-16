import React from 'react'
import classes from './pagination.module.css'

const pagination=(props)=>{
    const length=props.tData.length
    
    let P_len=null
    if(length)
     {
      if(length%20===0)
       P_len= length / 20
      else if(length>20)
       P_len= (length+20-length%20)/20 
      else P_len=1
     }

    let page=null
    if(P_len>1){
              page=[...Array(P_len)].map( (_,ind)=><span 
                                                      onClick={ ()=>{props.changePage(ind,P_len)} }
                                                      key={ind}
                                                      >
                                                    {++ind}
                                                   </span> 
                                        )
             }
        
    let pagination=null
    if(page) pagination=<div>
                         <span onClick={ ()=>{props.changePage('prev',P_len)} }>&laquo;</span>
                          {page}
                         <span onClick={ ()=>{props.changePage('nxt',P_len)} }>&raquo;</span> 
                        </div>
    return(
           <div className={classes.pagination}>
            {pagination}
           </div>
          )
}

export default pagination