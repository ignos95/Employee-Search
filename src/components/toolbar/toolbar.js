import React from 'react'
import Classes from './toolbar.module.css'
import Logo from '../logo/logo'

const toolbar=()=>(
    <div className={Classes.Toolbar}>
        
     <div className={Classes.Logo}>
       <Logo/>
     </div>
    
    </div>
)
export default toolbar