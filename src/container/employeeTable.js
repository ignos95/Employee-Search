import React from 'react'
import Aux from '../hoc/auxiliary/auxiliary'
import Data from './CompanyData.json'
import Classes from './employeeTable.module.css'

import SearchBar from '../components/searchBar/searchBar'
import Table from '../components/table/table'
import NameSearch from '../components/nameSearch/nameSearch'
import Pagination from '../components/pagination/pagination'


class EmployeeTable extends React.Component{
 state={

    companyData:Data['employeeData'],
    currentTable:[],
    companyName:'',
    branchName:'',
    sort_flag:[],
    nameSeachInput:'',
    nameSearchList:[],
    pageNo:1
 
 }

 //selection dropdown
 selectionHandler=(cName)=>{
   if(cName==='select'){
       this.setState({
                      currentTable:[],
                      pageNo:1,
                      companyName:'',
                      branchName:''
                    })
   }
   else if(cName==='--all--'){
       this.setState( { 
                        currentTable:[ ...this.state.companyData ] ,
                        pageNo:1,
                        companyName:'--all--',
                        branchName:''
                    } )
   }
  else{ 
      
       const newTable=this.state.companyData.filter(
                                                     (itm)=> (itm['company']===cName)
                                                   )
       this.setState( { 
                        currentTable:newTable,
                        pageNo:1,
                        companyName:cName,
                        branchName:''
                      } )
   }
 }

 selectionHandler2=(bName)=>{
   if(this.state.companyName==='--all--')
     {
       if( bName==='select')
       {
        this.setState( { 
                        currentTable:[ ...this.state.companyData ],
                        pageNo:1,
                        branchName:''
                     } )
       }
       else
       {
        const newTable=this.state.companyData.filter( itm => (itm['branch']===bName) )
        this.setState( { 
                        currentTable:newTable,
                        pageNo:1,
                        branchName:bName
                     } )
       }
    }
   else if(this.state.companyName !==''){
       if( bName==='select')
       {
        const newTable=this.state.companyData.filter( itm => (itm['company']===this.state.companyName) )
        this.setState( { 
                        currentTable:newTable,
                        pageNo:1,
                        branchName:''
                     } )
       }
       else
       {
        const newTable=this.state.companyData.filter( itm => (itm['company']===this.state.companyName && itm['branch']===bName) )
        this.setState( { 
                        currentTable:newTable,
                        pageNo:1,
                        branchName:bName
                     } )
       }
    }
   
 }

 //SORT DIRECTLY from Table

 sortFlag=(name)=>{
   if(this.state.sort_flag.indexOf(name)===-1)
   {
     this.state.sort_flag.push(name)
     this.sortTable(name)
   }
   else{
         this.sortTable('-'+name)
         const arr=[...this.state.sort_flag]
         const index=arr.indexOf(name)
         arr.splice(index,1)
         this.setState({sort_flag: arr})
       }
 }
 

 //SORT Current Table from dropdown

 sortTable=(name)=>{

 function dynamicSort(property) 
   {
     let sortOrder = 1;
  
     if(property[0] === "-") {
         sortOrder = -1;
         property = property.substr(1);
     }
  
     return function (a,b) {
         if(sortOrder === -1)
          {
             if(property==='age')
              return b[property]-a[property] 
             else 
              return b[property].localeCompare(a[property])
          }
         else
         {
             if(property==='age')
              return a[property]-b[property]
             else
              return a[property].localeCompare(b[property])
         }        
     }
   }

 const newTable=[...this.state.currentTable].sort( dynamicSort(name) )
 this.setState({ 
                 currentTable:newTable,
                 pageNo:1
              })

}

// NAME SEARCHBAR

nameSearchList=(event)=>{

  this.setState({nameSeachInput:event}) // 2 way binding

  if(event)
  {
   let ftr=null
   const namesArr=this.state.companyData.map( itm=>(itm['name']) )
   ftr=namesArr.filter(
                       itm=>{ 
                              if(itm.toUpperCase().search( event.toUpperCase() ) >= 0) return true
                              else return false   
                            }
                      )
    
   const uniqNames=[]
   for(let i=0;i<ftr.length;i++)
    {
      if(uniqNames.indexOf(ftr[i]) === -1) 
       uniqNames.push(ftr[i])
    }
 
   this.setState({ nameSearchList: uniqNames.sort()})
  }
  else this.setState({ nameSearchList:[]})

}

nameSearch=(name)=>{
  
  const newTable=this.state.companyData.filter(
                                                (itm)=>( itm["name"]===name )
                                              )
  this.setState( { 
                   currentTable:newTable,
                   pageNo:1,
                   nameSeachInput:'',
                   nameSearchList:[],
                   companyName:'',
                   branch:''
               } )

}

clearNameSearch=()=>{
  
  this.setState({
                  nameSeachInput:'',
                  nameSearchList:[]
               })

}

//pagination

pageHandler=(pg,P_len)=>{
    if(pg==='prev'){
      if(this.state.pageNo>1){
        this.setState( prevState=>{ 
                                   return( { pageNo: prevState.pageNo-1 } )
                                  }
                     )
      }
    }
    else if(pg==='nxt'){
      if(this.state.pageNo<P_len){
        this.setState( prevState=>{
                                   return( { pageNo:prevState.pageNo+1 } )
                                  }
                     )
      }
    }
    else this.setState({pageNo:pg})
  }

 render(){

   return(
   
    <Aux>
 
      <button onClick={ this.props.darkModeHandler } 
              className={ this.props.darkMode? [Classes.DarkMode,Classes.D_DarkMode].join(' ') : Classes.DarkMode }>
        Dark Mode
      </button>
      
      { 
       this.state.currentTable.length>20? <div className={this.props.darkMode? [Classes.pageNum_top ,Classes.D_pageNum_top].join(' ') : Classes.pageNum_top}>
                                           PAGE: {this.state.pageNo}
                                          </div>:null  
      }

      <SearchBar     data={this.state.companyData}
                     tData={this.state.currentTable}
                     sortTable={this.sortTable}
                     company={this.state.companyName} 
                     branch={this.state.branchName}
                     click={this.selectionHandler}
                     click2={this.selectionHandler2} 
                     darkMode={this.props.darkMode}/>

      <NameSearch    list={this.state.nameSearchList}
                     nameSearch={this.nameSearchList}
                     nameSeachInput={this.state.nameSeachInput}
                     click={this.nameSearch}
                     clear={this.clearNameSearch}
                     darkMode={this.props.darkMode}/>

      <Table         tData={this.state.currentTable}
                     company={this.state.companyName}
                     sortTable={this.sortFlag}
                     pageNo={this.state.pageNo}
                     darkMode={this.props.darkMode}/>

      <Pagination    tData={this.state.currentTable}
                     changePage={this.pageHandler}/>

      { 
       this.state.currentTable.length>20? <div className={Classes.pageNum_bottum}>PAGE: {this.state.pageNo}</div>:null  
      }
       
    </Aux>
     )
 }
}

export default EmployeeTable