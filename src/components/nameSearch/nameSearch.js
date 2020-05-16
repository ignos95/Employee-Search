import React from 'react'
import Classes from './nameSearch.module.css'

const nameSeach=(props)=>{

    let list=null
    let ul_list=null

    if(props.list.length){
        list=props.list.map( (itm,ind)=>( <li onClick={ ()=>{props.click(itm)} }
                                              key={ind}
                                          >

                                          {itm}

                                          </li>
                                        )
                           )
        ul_list=<ul>
                 {list}
                </ul>
    }
    return(
           <div className={Classes.nameSearch}>
            <label>Search: </label>
            <input onChange={ event=>{ props.nameSearch(event.target.value) } }/>
            <button onClick={props.clear}>clear</button>
            {ul_list}
           </div>  
          )
}

export default nameSeach