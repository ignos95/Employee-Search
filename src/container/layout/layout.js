import React from 'react'
import Aux from '../../hoc/auxiliary/auxiliary'

import Toolbar from '../../components/toolbar/toolbar'
import EmployeeTable from '../employeeTable'


class layout extends React.Component{
   state={
          dark_mode:false
         }
    
    darkModeHandler=()=>{
        this.setState( prevState=>{
                                    return ( { dark_mode:!prevState.dark_mode} )
                                  }
                     )
    }
         
   render(){
            
      if(this.state.dark_mode) document.body.style.backgroundColor='rgb(139, 146, 146)'
       else document.body.style.backgroundColor='ivory'

      return <Aux>          

                <Toolbar darkMode={this.state.dark_mode} 
                         darkModeHandler={this.darkModeHandler}/>  

                <EmployeeTable darkMode={this.state.dark_mode} 
                               darkModeHandler={this.darkModeHandler}/>

             </Aux> 

   }
}

export default layout