import React from 'react'
import Classes from './toolbar.module.css'
import Logo from '../logo/logo'

const toolbar=(props)=>(
    <div className={props.darkMode?[Classes.Toolbar,Classes.D_Toolbar].join(' '):Classes.Toolbar}>
        
     <div className={Classes.Logo}>
       <Logo/>
     </div>
    
    </div>
)
export default toolbar