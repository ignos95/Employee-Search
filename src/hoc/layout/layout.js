import React from 'react'
import Aux from '../auxiliary/auxiliary'
import Toolbar from '../../components/toolbar/toolbar'

const layout=(props)=><Aux>                   
                       <Toolbar/>  
                       {props.children}
                      </Aux> 

export default layout