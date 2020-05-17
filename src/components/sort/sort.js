import React from 'react'
import Classes from './sort.module.css'

const sort=(props)=>{
return(
       <div className={Classes.Sort}>

         <button className={props.darkMode?[Classes.SortBtn,Classes.D_SortBtn].join(' '):Classes.SortBtn}>
           Sort <span className={Classes.DownArrow}> \/ </span>
         </button>

         <ul className={Classes.Ul_Main}>

            <li className={Classes.Name_line}>

              Name

              <ul className={Classes.Ul_Name}>
                <li onClick={ ()=>{props.sortTable('name')} }>Ascending</li>
                <li onClick={ ()=>{props.sortTable('-name')} }>Descending</li>
              </ul>
            
            </li>
            
            <li className={Classes.Company_line}>
              
              Company
              
              <ul className={Classes.Ul_Company}>
                <li onClick={ ()=>{props.sortTable('company')} }>Ascending</li>
                <li onClick={ ()=>{props.sortTable('-company')} }>Descending</li>
              </ul>

            </li>

            <li className={Classes.Branch_line}>
              
              Branch
              
              <ul className={Classes.Ul_Branch}>
                <li onClick={ ()=>{props.sortTable('branch')} }>Ascending</li>
                <li onClick={ ()=>{props.sortTable('-branch')} }>Descending</li>
              </ul>

            </li>

         </ul>

       </div>
      )
}
export default sort