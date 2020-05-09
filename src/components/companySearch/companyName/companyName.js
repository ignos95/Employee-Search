import React from 'react'

const companyName=(props)=>{

    const name=props.cName.replace('_',' ')
    
    return( <option onClick={ ()=>{props.click(props.cName)} }>
             {name}
            </option> )

}

export default companyName