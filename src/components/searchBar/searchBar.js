import React from 'react'
import Classes from './searchBar.module.css'

import NameList from './nameList/nameList'
import Sort from '../sort/sort'

const companySearch=(props)=>
{
  const company=['Nexa','Extra Smart','Acer Tech','Techzilon','Soni','Moz Tech'].sort()
  const companyNames=company.map(
                                 (itm,ind)=>(<NameList Name={itm} 
                                                       click={props.click}
                                                       key={ind}/>
                                            )
                                )
  
  let branchNames=null

  if(props.company)
  {
   let tData=null
   if(props.company==='--all--') tData=props.data
   else tData=props.data.filter( itm=>(itm['company']===props.company) )

   branchNames=tData.map( itm=>itm["branch"] )
   
   const uniqNames=[]
   for(let i=0;i<branchNames.length;i++)
    {
      if(uniqNames.indexOf(branchNames[i]) === -1) 
       uniqNames.push(branchNames[i])
    }
 
   branchNames=uniqNames.sort().map(
                                     (itm,ind)=>(<NameList Name={itm} 
                                                           click={props.click2}
                                                           key={ind}/>
                                                )
                                   )
  }

 return(
        <div className={props.darkMode?[Classes.SearchBar,Classes.D_SearchBar].join(' '):Classes.SearchBar}>

          <label>Choose a Compnay: </label>
          <select onChange={ (event)=>{props.click(event.target.value)} } value={props.company}>
            <option value='select' >
             --none--
            </option>
            <option value='--all--' >
             --All--
            </option>

            {companyNames}
          </select>

            
          <label className={Classes.Label2}>Branch: </label>
          <select onChange={ (event)=>{ props.click2(event.target.value)}} value={props.branch}>
            <option value='select' >
             --none--
            </option>
            
            {branchNames}
          </select>

          
          <Sort sortTable={props.sortTable}
                darkMode={props.darkMode}/>

        </div>
       )
 
}
export default companySearch