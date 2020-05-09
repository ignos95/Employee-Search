import React from 'react'
import CompanyName from './companyName/companyName'

const companySearch=(props)=>{

                              const companyNames=Object.keys(props.data)
                                                        .map((itm)=>(<CompanyName cName={itm} 
                                                                                  click={props.click}
                                                                                  key={itm}/>
                                                                    )
                                                            )

                              return(
                                     <div>
                                         <label>Choose a Compnay: </label>

                                         <select>

                                           <option onClick={ ()=>{ props.click('select') } }>
                                            --select--
                                           </option>

                                           {companyNames}
                                         
                                         </select>
                                     </div>
                                    )
                              
                             }
export default companySearch