import React from 'react'

const row=(props)=>{
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.pos}</td>
        </tr>
    )
}

export default row