import React from 'react';

import './App.css';
import Layout from './hoc/layout/layout';
import EmployeeTable from './container/employeeTable'

function App() {
  return (
          <Layout>
            <EmployeeTable/>
          </Layout>
         );
}

export default App;
