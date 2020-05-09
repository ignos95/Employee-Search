import React from 'react'

import CompanySearch from '../components/companySearch/companySearch'
import Table from '../components/table/table'

class EmployeeTable extends React.Component{
 state={
   companyData:{
                  Nexa:[
                         {name:'Antony P T', age:25, pos:'Ex. Manager'},
                         {name:'John George', age:35, pos:'Ex. Manager'}
                       ],
                  
                  Extra_Smart:[
                                {name:'Shown M Sooraj', age:45, pos:'Ex. Manager'},
                                {name:'Rajiv S K', age:30, pos:'Sr. Manager'}
                              ],  
                  Acer_Tech:[
                              {name:'Ben Maximillian', age:45, pos:'Ex. Manager'},
                              {name:'Kevin James', age:55, pos:'Assosoate Manager'}
                            ],  
                  Techzilon:[
                              {name:'Antony H', age:30, pos:'Manager'},
                              {name:'Hormees John', age:25, pos:'Salesman'}
                            ],  
                  Soni:[
                         {name:'David Abraham', age:40, pos:'Sr. Manager'},
                         {name:'Zameen Muhammad', age:50, pos:'Sr. Manager'}
                       ],  
                  
                },
    currentTable:[]
 }
 
 selectionHandler=(cName)=>{
   if(cName==='select'){
       this.setState({currentTable:[] })
   }
   else{
       this.setState( { currentTable:this.state.companyData[cName].slice() } )
   }
 }

 render(){
     return(
         <div>
          <CompanySearch data={this.state.companyData} click={this.selectionHandler}/>
          <Table tData={ this.state.currentTable } />
         </div>
     )
 }
}

export default EmployeeTable