import React from 'react'
import Aux from '../auxiliary/auxiliary'

const layout=(props)=><Aux>                   
                  <p>toolbar</p>   
                  {props.children}
                 </Aux> 

export default layout