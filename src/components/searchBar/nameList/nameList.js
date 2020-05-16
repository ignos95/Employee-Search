import React from 'react'

const NameList=(props)=>{

    const name=props.Name.replace('_',' ')
    
    return( <option value={props.Name}>
             {name}
            </option> )

}

export default NameList