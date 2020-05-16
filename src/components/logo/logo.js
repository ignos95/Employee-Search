import React from 'react'
import LogoImage from '../../assets/logo/logo.jpg'
import Classes from './logo.module.css'

const logo=()=>(
 <div className={Classes.Logo}>
  <img src={LogoImage} alt='Logo'/>
 </div>
)
export default logo